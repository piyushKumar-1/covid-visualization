import requests as re
import pandas as pd
from sqlalchemy import create_engine
from datetime import date
date

engine = create_engine('sqlite:///db.sqlite3')
page = re.get('https://www.worldometers.info/coronavirus/')
k = date.today()

def intt(x):
    if x!=0:
        return (int(((str(x)[1:]).replace(",",""))))
    else:
        return 0

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



data1 = df[0]
ls = [f'{k.year}-{k.month}-{k.day}']*len(data1)

df = pd.read_csv("owid-covid-data.csv")
data = df[df['location']=='United Kingdom']

data['location'] = 'UK'

df[df['location']=='United Kingdom'] = data

data = df[df['location']=='United Arab Emirates']

data['location'] = 'UAE'

df[df['location']=='United Arab Emirates'] = data

df.drop(['iso_code', 'total_cases_per_million', 'total_deaths_per_million', 'new_cases_per_million', 'new_deaths_per_million', 'total_tests', 'new_tests', 'total_tests_per_thousand', 'new_tests_per_thousand', 'tests_units'],inplace=True, axis=1)


data2 = df

d = [data1['Country'],pd.Series(ls), data1['Total_Cases'],data1['New_Cases'].apply(intt),data1['Total_Deaths'],data1['New_Deaths'].apply(intt)]

data2 = data2.append(pd.DataFrame(d,index=['location', 'date', 'total_cases', 'new_cases', 'total_deaths', 'new_deaths']).T,verify_integrity=False)

data2.to_sql('makedata_daily',con=engine, if_exists='replace')
