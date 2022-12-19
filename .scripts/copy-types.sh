#!/bin/bash

# Find all directories named "types" in subdirectories of src
for src_dir in $(find ./src -name types -type d); do
  # Get the corresponding destination directory by removing "./src" from the path
  dest_dir=$(echo $src_dir | sed 's/\.\/src\///')
  # Create the destination directory if it doesn't exist
  mkdir -p $dest_dir
  # Copy the contents of the source directory to the destination directory
  cp -r $src_dir/* $dest_dir/
done
