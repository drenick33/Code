import re

def getContacts(data):
    y = re.findall(r'[\w\.-]+@[\w\.-]+', data)  #Get all emails
    y = removeDups(y)
    if y:
        print('---Email---')
        print(y[0])
    x = re.findall(r'(https?://[^\s]+)', data)  #Get all Urls
    x = removeDups(x)
    i = 0
    while (len(x) > i):
        if re.findall('instagram', x[i]):
            print('---Instagram---')
            print(x[i])
        i += 1
    i = 0
    while (len(x) > i):
        if re.findall('facebook', x[i]):
            print('---Facebook---')
            print(x[i])
        i += 1
    i = 0
    while (len(x) > i):
        if re.findall('twitter', x[i]):
            print('---Twitter---')
            print(x[i])
        i += 1
    while (len(x) > i):
        if re.findall('youtube', x[i]):
            print('---Youtube---')
            print(x[i])
        i += 1
    i = 0
    while (len(x) > i):
        if re.findall('pinterest', x[i]):
            print('---Pinterest---')
            print(x[i])
        i += 1
    print('=======================================================================')

def removeDups(x):
    return(list(dict.fromkeys(x))
)