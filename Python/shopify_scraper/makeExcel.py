import re
import xlsxwriter
from getSoup import getSoup

def makeExcel(sites):

    # Workbook() takes one, non-optional, argument  
    # which is the filename that we want to create. 
    workbook = xlsxwriter.Workbook('ShopifyContacts.xlsx') 
  
    # The workbook object is then used to add new  
    # worksheet via the add_worksheet() method. 
    worksheet = workbook.add_worksheet()
    
    row = 1
    worksheet.write('A' + str(row), 'Website')
    worksheet.write('B' + str(row), 'Email')
    worksheet.write('C' + str(row), 'Instagram')
    worksheet.write('D' + str(row), 'Facebook')
    worksheet.write('E' + str(row), 'Twitter')
    worksheet.write('F' + str(row), 'Youtube')
    worksheet.write('G' + str(row), 'Pinterest')

    i = 0
    while (len(sites) > i):
        row+=1
        worksheet.write('A' + str(row), sites[i])
        data = getSoup(sites[i])
        #data = removeDups(data)  #get rid of duplicate entries
        y = re.findall(r'[\w\.-]+@[\w\.-]+', data)  #Get all emails
        if y:
            worksheet.write('B' + str(row), y[0])
            print('---Email---')
            print(y[0])
        else:
            worksheet.write('B' + str(row), 'N/A')

        x = re.findall(r'(https?://[^\s]+)', data)  #Get all Urls
        x = removeDups(x)
        searchString(x, 'instagram.com', row, 'C', worksheet)
        searchString(x, 'facebook.com', row, 'D', worksheet)
        searchString(x, 'twitter.com', row, 'E', worksheet)
        searchString(x, 'youtube.com', row, 'F', worksheet)
        searchString(x, 'pinterest.com', row, 'G', worksheet)
        #if re.findall('instagram', x):
           # print('---Instagram---')
          #  print(x)
#        y = re.findall('instagram', data)
#        if y:
#            worksheet.write('C' + str(row), y[0])
#            print('---Instagram---')
#            print(y[0])
#        else:
#            worksheet.write('C' + str(row), 'N/A')


        i+=1

    print('making excel file')

    workbook.close() 

def removeDups(x):
    return(list(dict.fromkeys(x)))

def searchString(x, site, row, col, worksheet):
    k = 0
    while (len(x) > k):
        if re.findall(site, x[k]):
            print('---' + site.capitalize() + '---')
            print(x[k])
            worksheet.write(col + str(row), x[k])
        k+=1
