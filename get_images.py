import urllib.request
import re

urls = [
    'https://www.haascnc.com/mx/machines/vertical-mills/vf-series/models/small/vf-2ss.html',
    'https://www.haascnc.com/mx/machines/lathes/st/models/standard/st-15.html'
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        images = set(re.findall(r'src=\"(/content/haascnc[^\"]+\.(?:jpg|png))\"', html))
        print(f"Images for {url}:")
        for img in images:
            print(f"https://www.haascnc.com{img}")
    except Exception as e:
        print(f"Error {url}: {e}")
