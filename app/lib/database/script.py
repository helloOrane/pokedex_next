import random
import pandas as pd
import os
import sqlite3


# #use the path of the csv file
path = os.path.join(os.path.dirname(__file__), 'pokemon.csv')

df = pd.read_csv(path)

# #generate sql lite database
conn = sqlite3.connect('pokemon.db')
# UNCOMMENT THE FOLLOWING CODE TO GENERATE THE DATABASE
# df.to_sql('pokemon', conn, if_exists='replace', index=True, index_label='id')

#get the pokemon ids from the table pokemon
pokemon_ids = pd.read_sql_query("SELECT id FROM pokemon", conn)
status = ['uncaptured', 'captured', 'team']
random_status = []
print(pokemon_ids)

# itertuples() method is used to iterate over DataFrame rows as namedtuples (ex: (index, id))
# index=False is used to exclude the index column
for row in pokemon_ids.itertuples(index=False):
    random_status.append({
        'pokemon_id': row.id,
        'status': status[random.randint(0,2)]})

pokemon_status_df = pd.DataFrame(random_status, columns=['pokemon_id', 'status'])
pokemon_status_df.to_sql('pokemon_status', conn, if_exists='replace', index=True, index_label='id')