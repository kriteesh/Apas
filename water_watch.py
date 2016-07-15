
# coding: utf-8

# In[24]:

from PIL import Image
im = Image.open("C:/Users/Krit/Downloads/coimbatorewater.png")
rgb_im = im.convert('RGB')
count=0
for x in range(1,512):
    for y in range(1,512):
        if rgb_im.getpixel((x,y)) == (0,255,0):
            count+=1
             
print (count)


# In[ ]:



