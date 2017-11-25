#!/bin/bash
find . -type d | xargs chmod 711
find . -name *.php | xargs chmod 640
find . -name *.js | xargs chmod 644
chmod 644 pset8/index.html
chmod 644 pset8/css/*
chmod 644 pset8/img/*
chmod 644 pset8/fonts/*
echo "\nPermissions changed\n"