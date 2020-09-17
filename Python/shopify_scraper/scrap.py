from parseUrl import parseUrl
from getContacts import getContacts
from getSoup import getSoup
from makeExcel import makeExcel

sites = []
sites = parseUrl()
print('-----------------------------')
print('The following sites will be scraped: ')
print(sites)
print('-----------------------------')

makeExcel(sites)

#Replace makeExcel with the code bellow to not save as an excel sheet
#i = 0
#while (len(sites) > i):
#    a = getSoup(sites[i])
#    getContacts(a)
#    i += 1