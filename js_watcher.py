import os
import time
import subprocess
import sys, datetime


MTIME = {}
dirname = os.path.join(os.path.dirname(__file__), r"src")
DELAY = 2

def get_files(dirname):
    flag = False
    for root, dirnames, files in os.walk(dirname):
        for filename in files:
            fullname = os.path.join(root,filename)
            if not fullname in MTIME:
                MTIME[fullname] = os.path.getmtime(fullname)
            else:
                if os.path.getmtime(fullname) != MTIME[fullname]:
                    flag = True
                    MTIME[fullname] = os.path.getmtime(fullname)
    return flag
##    for root, dirnames, files in os.walk(path):
##        for filename in files:
##            fullname = os.path.join(root,filename)
##            MTIME[fullname] = os.path.getmtime(fullname)
get_files(dirname)
while True:
    time.sleep(DELAY)
    if get_files(dirname):
        print('Обновил:', datetime.datetime.now())
        os.system('browserify src/index.js -o dist/js/main.js')
