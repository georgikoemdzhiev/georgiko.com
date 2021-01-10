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

# the number of milliseconds elapsed since January 1 (equivalent to Date.now() in JavaScript)
currentDateUTC="$(($(date +%s%N)/1000000))"
echo currentDateUTC
# read title from STDIN
echo "Enter post title.."
read -r title

cat $postDir/posts_header.json | jq --arg id $currentPostId --arg date $currentDateUTC --arg title "$title" '.Posts += [{"Id":$id, "Date":$date, "Title":$title}]' > $postDir/temp.json
rm $postDir/posts_header.json
mv $postDir/temp.json $postDir/posts_header.json

echo "Done. Added new post with title '$title'"