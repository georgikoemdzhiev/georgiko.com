#!/bin/bash
# Script that adds a new post

postDir=src/assets/posts/
# get the last folder name (i.e. id)
currentPostId=$(find $postDir -mindepth 1 -type d | cut -d"/" -f4 | sort | awk 'END { print }')

# increment it using the arithmetic expansion operator $((...))
currentPostId=$((currentPostId+1))

echo "Creating post folder" $currentPostId
mkdir -p $postDir/$currentPostId
echo OK
echo "Creating post html file..."
touch $postDir/$currentPostId/$currentPostId.html
echo OK

# TODO add logic to add a new post in 'post_header.json' file