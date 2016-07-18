
# coding: utf-8
#google static maps -generated image #
# https://maps.googleapis.com/maps/api/staticmap?size=512x512&zoom=15&maptype=satellite&center=Coimbatore&style=feature:water%7Celement:geometry%7Ccolor:0x00ff00%7Cweight:1%7Cvisibility:on&key=AIzaSyBozbn-Zw4R628oOwLB3wfeBvMln8p4ozk#
# In[24]:

from PIL import Image
import requests
from io import BytesIO
address = input("Please enter city or lat/lang: ")

response = requests.get('http://maps.googleapis.com/maps/api/staticmap?maptype=terrain&size=512x512&zoom=13&center='+ address + '&style=feature:water%7Celement:geometry%7Ccolor:0x00ff00%7Cweight:1%7Cvisibility:on&key=AIzaSyBozbn-Zw4R628oOwLB3wfeBvMln8p4ozk')
response_s = requests.get('http://maps.googleapis.com/maps/api/staticmap?maptype=satellite&size=512x512&zoom=13&center='+ address + '&style=feature:water%7Celement:geometry%7Ccolor:0x00ff00%7Cweight:1%7Cvisibility:on&key=AIzaSyBozbn-Zw4R628oOwLB3wfeBvMln8p4ozk')
im = Image.open(BytesIO(response.content))
im_s = Image.open(BytesIO(response_s.content))
rgb_im = im.convert('RGB')
rgb_im_s = im_s.convert('RGB')
green=0
for x in range(1,512):
    for y in range(1,512):
        if rgb_im.getpixel((x,y)) == (0,255,0):
#             print(rgb_im_s.getpixel((x,y))) - satellite image comparison. 
            green+=1
             
print (green)
count= 0 
for pixel in im.getdata():
    count+=1
print(count)
print(green/count*100) 


# In[ ]:



