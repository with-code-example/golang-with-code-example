---
title: "5  Most Useful Scripts in Python - 1"
subtitle: "A list of Python scripts for converting JSON to CSV, generating passwords, searching for strings, fetching links, and watermarking images."
description: "A list of Python scripts for converting JSON to CSV, generating passwords, searching for strings, fetching links, and watermarking images."
slug: 5-most-useful-scripts-in-python---1
tags: ['python', ' snippets']
date: 2024-03-22T12:44:42.483Z
featured_image: "https://res.cloudinary.com/harendra21/image/upload/w_1920,f_auto/images/python-scripts-1_cJdhDu0h.png"
thumbnail: "https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/python-scripts-1_cJdhDu0h.png"
comments: true
draft: false
series: ['Python Snippets']
audio: ""
---

Hello everyone, This is my first post on a useful Python script. I will publish more posts in the future where I will collect important scripts of Python or mini-projects to improve my Python skills.

## 1. Convert JSON to CSV

This script will convert your JSON data to a CSV file. It takes  `.json`  a file as input and provides  `.csv`  the file as output.

### Installation


```pip install json```

### Python Script (json-to-csv.py)

```py
import json

if __name__ == "__main__":
    try:
        with open("input.json", "r") as f:
            data = json.loads(f.read())

        output = ",".join([*data[0]])
        for obj in data:
            output += f'\n{obj["Name"]},{obj["age"]},{obj["birthyear"]}'

        with open("output.csv", "w") as f:
            f.write(output)
    except Exception as ex:
        print(f"Error: {str(ex)}")

```

### JSON File (input.json)
```json
[
    {"Name": "Badal Singh", "age": 26, "birthyear": "1994"},
    {"Name": "Nirbhay", "age": 34, "birthyear": "1986"},
]

```
**Run**

```python3 json-to-csv.py```

## 2. Python Password Generator

This simple Python project uses a `random`  and  `string`  package to generate a random string of a given length.

### Python script (python-password.py)

```py
import random
import string

total = string.ascii_letters + string.digits + string.punctuation

length = 16

password = "".join(random.sample(total, length))

print(password)

```

**Run**

```python3 python-password.py```

## 3. String search from multiple files

Finds a file with the supplied string in the folder of your choosing.

### Python script (search-string.py)

```py
import os

text = input("input text : ")

path = input("path : ")

# os.chdir(path)


def getfiles(path):
    f = 0
    os.chdir(path)
    files = os.listdir()
    # print(files)
    for file_name in files:
        abs_path = os.path.abspath(file_name)
        if os.path.isdir(abs_path):
            getfiles(abs_path)
        if os.path.isfile(abs_path):
            f = open(file_name, "r")
            if text in f.read():
                f = 1
                print(text + " found in ")
                final_path = os.path.abspath(file_name)
                print(final_path)
                return True

    if f == 1:
        print(text + " not found! ")
        return False


getfiles(path)

```

**Run**

```python3 search-string.py```

## 4. Fetch all links from a given webpage

This script gets all links from a particular website and saves them as a text file.

### Installation

```pip install beautifulsoup4 requests```

### Python script (get-links.py)

```py
import requests as rq
from bs4 import BeautifulSoup

url = input("Enter Link: ")
if ("https" or "http") in url:
    data = rq.get(url)
else:
    data = rq.get("https://" + url)
soup = BeautifulSoup(data.text, "html.parser")
links = []
for link in soup.find_all("a"):
    links.append(link.get("href"))

# Writing the output to a file (myLinks.txt) instead of to stdout
# You can change 'a' to 'w' to overwrite the file each time
with open("myLinks.txt", "a") as saved:
    print(links[:10], file=saved)

```

**Run**

```python3 get-links.py```

## 5. Image Watermark

This project will take a photograph and put a watermark of your choice on it.

### **Installation**

```pip install Pillow```

### Python script (watermark.py)

```py
import os
from PIL import Image


def watermark_photo(input_image_path, watermark_image_path, output_image_path):
    base_image = Image.open(input_image_path)
    watermark = Image.open(watermark_image_path).convert("RGBA")
    # add watermark to your image
    position = base_image.size
    newsize = (int(position[0] * 8 / 100), int(position[0] * 8 / 100))
    # print(position)
    watermark = watermark.resize(newsize)
    # print(newsize)
    # return watermark

    new_position = position[0] - newsize[0] - 20, position[1] - newsize[1] - 20
    # create a new transparent image
    transparent = Image.new(mode="RGBA", size=position, color=(0, 0, 0, 0))
    # paste the original image
    transparent.paste(base_image, (0, 0))
    # paste the watermark image
    transparent.paste(watermark, new_position, watermark)
    image_mode = base_image.mode
    print(image_mode)
    if image_mode == "RGB":
        transparent = transparent.convert(image_mode)
    else:
        transparent = transparent.convert("P")
    transparent.save(output_image_path, optimize=True, quality=100)
    print("Saving" + output_image_path + "...")


folder = input("Enter Folder Path:")
watermark = input("Enter Watermark Path:")
os.chdir(folder)
files = os.listdir(os.getcwd())
print(files)

if not os.path.isdir("output"):
    os.mkdir("output")

c = 1
for f in files:
    if os.path.isfile(os.path.abspath(f)):
        if f.endswith(".png") or f.endswith(".jpg"):
            watermark_photo(f, watermark, "output/" + f)

```

**Run**

```python3 watermark.py [image_path]```

Replace  _[image path]_  with the image on which you wish to apply a watermark.