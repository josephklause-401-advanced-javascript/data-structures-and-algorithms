a bunch of files are on a computer
each file has one word
reformat to look like 
${file_content}-${old_File_number}-${last_modified_datetime}


Need this first:
1. to get old file number... need to find a way to read the name of the file
fs.readdir(path) will give you a list of the files.


next: for each through these:
2. to get last modified datetime... need to find a way to get the last time it was modified
fs.statSync(filePathName).mtime

3. to get file content... use fs.readFile (need file path)

.then, make these into a file name, and fs.writeFile(newFilePath)


CHUNKS
1. write function using fs.readdir(path) that takes a directory, and returns an array of all the files in that directory.... must remove after .

2. write a function using fs.stat that takes a path for a file and gets the last time that file was modified

3. write a function using fs.readFile that takes a path and reads the file of that path

4. write a function using fs.writeFile that takes a file path and writes and empty file.

5. write a function that takes in a directory path 
  1. uses the readdir function to come up with an array of paths
  2. iterates through the array and gets the last time it was modified, and content
  3. creates a new file name based on these pieces
  4. uses writefile to write new file path