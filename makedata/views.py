from django.shortcuts import render, redirect
from .models import database, daily
from .forms import CountryForm
from django.http import JsonResponse
import random
import math



def update(request):
    pass






def indian(t):
    dic = {
        4: 'Thousand',
        5: 'Lakh',
        6: 'Lakh',
        7: 'Crore',
        8: 'Crore',
        9: 'Arab'
    }
    y = 10
    len_of_number = len(str(t))
    save = t
    z = y
    while (t != 0):
        t = int(t / y)
        z *= 10
    zeros = len(str(z)) - 3
    if zeros > 3:
        if zeros % 2 != 0:
            string = str(save / (z / 100))[0:4] + " " + dic[zeros]
        else:
            string = str(save / (z / 1000))[0:4] + " " + dic[zeros]
        return string
    return str(save)


def allk(request,c_name):
    obj = daily.objects.all()
    print(c_name)
    day_gap = 7
    ls = []
    dates = []
    data = []
    deaths = []
    k = 0
    for i in obj:

        if i.location.lower() == c_name.lower() and i.total_cases>0 and k==0:
            k+=1
            dates.append(i.date)
            data.append(i.total_cases)
            deaths.append(i.total_deaths)
        if k>0 and k<day_gap:
            k+=1
        if k==day_gap:
            k=0
    ls.append({'labels': dates, 'datasets':[{'label': "Total Cases", 'backgroundColor': "rgba(255, 10, 13, 0.1)", 'data': data},{'label': "Total Deaths", 'backgroundColor': "rgba(42, 187, 155, 0.5)", 'data': deaths}]})
    return JsonResponse(ls, safe=False)


def datar(request,k):
    print(k,k,k,k)
    abj = database.objects.all()
    datalist =[]
    labels = []
    data = []
    if k == 'all':
        ac = 0
        cc = 0
        wtc = 0
        wtd = 0
        abj = database.objects.all()
        datalist = []
        datas = [i.Total_Deaths for i in abj]
        kk = []
        for i in abj:
            #kk.append([str(i.Country).replace("\n",""),str(i.Country).replace('\n','')])
            if i.Country == 'World':
                ac = i.Active_Cases
                wtc = int(i.Total_Cases)
                wtd = int(i.Total_Deaths)
                cc = int(i.Critical)
                continue
            if i.Total_Deaths >= sum(datas)/len(abj):
                labels.append(i.Country)
                data.append(i.Total_Deaths)
        #kk.sort(key=lambda x: x)
        #print(f"const options={str(kk)}")

        clr = []
        def hex_code_colors():
            a = hex(random.randrange(0, 256))
            b = hex(random.randrange(0, 256))
            c = hex(random.randrange(0, 256))
            a = a[2:]
            b = b[2:]
            c = c[2:]
            if len(a) < 2:
                a = "0" + a
            if len(b) < 2:
                b = "0" + b
            if len(c) < 2:
                c = "0" + c
            z = a + b + c
            return "#" + z.upper()
        while(len(clr)!=len(data)):
            k = hex_code_colors()
            if k not in clr:
                clr.append(k)
        datalist.append({'labels': labels, 'country': 'World Major Deaths Count', 'clr': clr, 'type': 'doughnut', 'data': data,'ac': indian(ac), 'wtd':indian(wtd), 'wtc': indian(wtc), 'cc': indian(cc) })
        return JsonResponse(data=datalist, safe=False)


    for i in abj:
        if i.Country.lower().replace(' ','').replace('\n','')==k.lower().replace(' ','').replace('\n',''):
            labels.append('Total Cases')
            labels.append('Total Recovered')
            labels.append('Total Deaths')
            data.append(i.Total_Cases)
            data.append(i.Total_Recovered)
            data.append(i.Total_Deaths)
            cd = i.Total_Deaths
            ctc = i.Total_Cases
            cratio = 0
            try:
                per = (cd / ctc) * 100
                cratio = int(ctc / cd)
                per = format(per, '.3f')
            except:
                per = "No Deaths as of now, But be safe and stay home 0"
            print('ahh')
            if cd == 0:
                h = 0
            else:
                h = 1


            cdr = [indian(int(i.Total_Cases)),indian(int(i.Total_Deaths)),indian(int(i.Total_Recovered)), h, per, cratio]

            stk_d = [i.Total_Cases, i.Total_Recovered, i.Total_Deaths]

            try:
                int(i.New_Cases[1:])
                stk_d.append(int(i.New_Cases[1:]))
            except:
                stk_d.append(0)
            try:
                int(i.New_Deaths[1:])
                stk_d.append(int(i.New_Deaths[1:]))
            except:
                stk_d.append(0)
            stk_d.append(0)



            datalist.append({'labels': labels, 'country': i.Country, 'clr': ['blue', 'green', 'orange'], 'type': 'bar', 'data': data,'stk_d': stk_d, 'cdr':cdr})
            break



    return JsonResponse(data=datalist, safe=False)

"""
            {
                labels: ['label', 'l'],
                datasets: [
                            {
                                label: 'old cases', 
                                backgroundColor: ['blue', 'green', 'orange'],
                                data: [cases, recovered, death]
                            },
                            {
                                label: 'new cases',
                                backgroundColor: ['skylue', 'lightgreen', 'lightyellow'],
                                data: [cases, revovered, death]
                            }
                ]
            }
"""

