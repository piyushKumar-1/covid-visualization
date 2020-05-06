import requests as re
import pandas as pd
from sqlalchemy import create_engine
engine = create_engine('sqlite:///db.sqlite3')


df = pd.read_csv("owid-covid-data.csv")

df[df['location']=='United Kingdom']


df.drop(['iso_code', 'total_cases_per_million', 'total_deaths_per_million', 'new_cases_per_million', 'new_deaths_per_million', 'total_tests', 'new_tests', 'total_tests_per_thousand', 'new_tests_per_thousand', 'tests_units'],inplace=True, axis=1)



data = df[df['location']=='United Kingdom']

data['location'] = 'UK'

df[df['location']=='United Kingdom'] = data

data

data = df[df['location']=='United Arab Emirates']

data['location'] = 'UAE'

df[df['location']=='United Arab Emirates'] = data


df.to_sql('makedata_daily',con=engine, if_exists='replace')

