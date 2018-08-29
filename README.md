
#[Flashie] (https://jannaee.github.io/React/)
 
 Flashie is a simple Flash Card application for toddlers. I created this with the ReactJS and JSON served from Firebase. 

Articles that helped me create this React App.
https://www.codecademy.com/learn/react-101 => Codecademy.com course fir ReactJS

https://www.youtube.com/watch?v=UtIOMUQ7nWM&t=4302s =>Crash course in ReactJS
https://www.youtube.com/watch?v=pKCAtlsn1Eo => How to Create the App with React and Firebase
https://github.com/gitname/react-gh-pages => How to Deploy App to production

#To Do's for Version 2
[Incorporate webpack] (https://www.valentinog.com/blog/webpack-tutorial/)
Update manifest.json
Update Favicon to a custom logo


Notes to self:
To operate this application install latest nodejs, reactjs, and git (at least v16 if you're on PC)
npm run start to trigger the dev server
npm run build to build source to production folder
npm run depoly to push to build source code for production deployment

Making new changes to the project: (to ensure master branch is where public code lives, but gh-pages contains the build src code.)
$ git add .
$ git commit -m ""
$ git push origin master

Updating Firebase data:
Option 1 to update data: \src\Data\Card.json
 - update json file \src\Data\Card.json and upload directly to Firebase console and project eact-flashcards

Option 2 update [Firebase realtime] (https://console.firebase.google.com)
