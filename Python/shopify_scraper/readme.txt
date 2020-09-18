This script finds contact information and social media from
a list of urls that are in json format.

The script scrapes the page using Beautiful Soup and
then searches the links on the page for the desired information.

After succesfully getting the information, it is then stored
into an excel document.

Using the Script:

Run: 
python scrap.python

*There needs to be a file called data.json which has the
urls stored in Json format {url : www.foobar.com}


Dependencies:
python3,
Beautiful Soup,
xlsxwriter (for excel)
requests

run to install dependencies
pip install bs4
pip install XlsxWriter
pip install requests
