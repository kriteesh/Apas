
# coding: utf-8
#google static maps -generated image #
# https://maps.googleapis.com/maps/api/staticmap?size=512x512&zoom=15&maptype=satellite&center=Coimbatore&style=feature:water%7Celement:geometry%7Ccolor:0x00ff00%7Cweight:1%7Cvisibility:on&key=AIzaSyBozbn-Zw4R628oOwLB3wfeBvMln8p4ozk#
# In[24]:

from PIL import Image
im = Image.open("C:/Users/Krit/Downloads/coimbatorewater.png")
rgb_im = im.convert('RGB')
green=0
for x in range(1,512):
    for y in range(1,512):
        if rgb_im.getpixel((x,y)) == (0,255,0):
            green+=1
             
print (green)
count= 0 
for pixel in im.getdata():
    count+=1
print(count)
print(green/count*100)


# In[ ]:



