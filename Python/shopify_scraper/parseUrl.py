import json

def parseUrl():
    input_file = open ('data.json')
    json_array = json.load(input_file)
    siteList = []

    for item in json_array:
        siteDetails = {"url": None}
        siteDetails["url"] = item["url"]
        siteList.append(siteDetails)

    sites = []
    i = 0
    while (len(siteList) > i):
        sites.append(siteList[i]['url'])
        i += 1
    return(sites)