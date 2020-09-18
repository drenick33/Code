
from bs4 import BeautifulSoup
import requests as req


def getSoup(site):
    print('+++++-----+++++Site+++++-----+++++-----')
    print(site)
    try:
        html = req.get('http://' + site)
        soup = BeautifulSoup(html.text, 'lxml')
        links = []
        links = [a.get('href') for a in soup.find_all('a', href=True)]
        links = " ".join(links)
        return (links)
    except:
        return([''])