import pandas as pd
import os
import sqlite3

#use the path of the csv file
path = os.path.join(os.path.dirname(__file__), 'pokemon.csv')

datas = pd.read_csv(path)

def generate_img_url(pokemon_id):
    return f'https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_${pokemon_id}_00.png'

pokemonIds = datas['pokedex_number']

url_df = pd.DataFrame( columns=['id', 'url'], data=[(id, generate_img_url(id)) for id in pokemonIds])
# parcourir les données

pokemon_df = pd.merge(datas, url_df, how='left', left_on='pokedex_number', right_on='id').drop(columns=['id'])

#generate sql lite database
conn = sqlite3.connect('pokemon.db')
pokemon_df.to_sql('pokemon', conn, if_exists='replace', index=False)