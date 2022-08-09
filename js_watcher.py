import os
import time
import subprocess
import sys, datetime


MTIME = {}
dirname = r"C:\js_course\diplom\src"

def get_files(path):
    for root, dirnames, files in os.walk(path):
        for filename in files:
            fullname = os.path.join(root,filename)
            MTIME[fullname] = os.path.getmtime(fullname)
get_files(dirname)
while True:
    time.sleep(10)
    flag = False
    for root, dirnames, files in os.walk(dirname):
        for filename in files:
            fullname = os.path.join(root,filename)
            if os.path.getmtime(fullname) != MTIME[fullname]:
                flag = True
                MTIME[fullname] = os.path.getmtime(fullname)
    if flag:
        print('Обновил:', datetime.datetime.now())
        os.system('browserify src/index.js -o dist/js/main.js')
