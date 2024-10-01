import pandas as pd
import os
import sqlite3

#use the path of the csv file
path = os.path.join(os.path.dirname(__file__), 'pokemon.csv')

df = pd.read_csv(path)

#generate sql lite database
conn = sqlite3.connect('pokemon.db')
df.to_sql('pokemon', conn, if_exists='replace', index=True, index_label='id')