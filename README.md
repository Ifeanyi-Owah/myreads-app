# MyReads : A book Tracking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json #
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

This application helps the user track and manage books in a digital library while categorizing the status of each book according to its location on a library shelf. The available shelfs are :

- Currently Reading
- Want to Read
- Read
- None

## Running the Application

To run this app, Clone or download the repo [MyReads App Repo](https://github.com/Ifeanyi-Owah/myreads-app) to your computer

- Navigate to the directory where you saved the folder: MacOS: [`macOS Terminal Navigation`](https://wiki.communitydata.science/MacOS_terminal_navigation). Window:
  [`Windows Terminal Navigation`](https://wiki.communitydata.science/Windows_terminal_navigation)
- install all project dependencies with `npm install`
- start the development server with `npm start`
- Navigate to http://localhost:3000/ on your browser and you should see a web page like this:
  ![MyReads App mainpage]("/images/Myreads App mainpage.png "Mainpage")

### Search Terms

More books can be retrieved from the server on the search page http://localhost:3000/search. Refer to the SEARCH_TERMS.md file

## Contributing

Ifeanyi Owah.
