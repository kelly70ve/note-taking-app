# Unit 11 Express Homework: Note Taker

## Description

This is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## User Story
``` 
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete 
```
## Project Goals

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Heroku

This application is deployed on [Heroku](https://kelly-note-taking-app.herokuapp.com/)

## Future Development 

Currently, if a user creates a note with a duplicate title and tries to delete one, it will delete both notes. 

A validation function needs to be created to check the json file to see if there is a note that already exsists with that name, if it does it will alert the user to choose a new name for the title. 

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
