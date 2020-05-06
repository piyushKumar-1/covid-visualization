import requests as re
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('sqlite:///db.sqlite3')
page = re.get('https://www.worldometers.info/coronavirus/')

df = pd.read_html(page.text)
col = ['Country', 'Total_Cases', 'New_Cases', 'Total_Deaths', 'New_Deaths','Type','Day_since_last_reported']
col1 = ['Country', 'Total_Cases', 'New_Cases', 'Total_Deaths', 'New_Deaths',
       'Total_Recovered', 'Active_Cases', 'Critical', 'Tot_Cases_pm',
       'Deaths_pm', 'Total_Tests', 'Tests_pm']

df[0].columns = col1
print(df[0].info())

df[0] = df[0].fillna(0)

df[0] = df[0][df[0]['Country']!='Total:']

df[0].to_sql('makedata_database',con=engine, if_exists='replace')


df = pd.read_csv("owid-covid-data.csv")
df

df.drop(['iso_code', 'total_cases_per_million', 'total_deaths_per_million', 'new_cases_per_million', 'new_deaths_per_million', 'total_tests', 'new_tests', 'total_tests_per_thousand', 'new_tests_per_thousand', 'tests_units'],inplace=True, axis=1)

df.to_sql('makedata_daily',con=engine, if_exists='replace')

