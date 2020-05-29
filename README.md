# MyReads : A book Tracking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
    └── manifest.json
    └── robots.txt
└── src
    ├── App.css
    ├── App.js
        ├── MainPage.js
            ├── BookSearch.js
                ├── Book.js
            ├── BookShelf.js
                ├── Book.js
    ├── App.test.js
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── images
        ├── Mreads App mainpage.png
        ├── Searchpage.png
    ├── index.css
    └── index.js
```

This application helps the user track and manage books in a digital library while categorizing the status of each book according to its location on a library shelf. The available shelfs are :

- Currently Reading
- Want to Read
- Read
- None

## Running the Application

To run this app:

- Clone or download the repo [MyReads App Repo](https://github.com/Ifeanyi-Owah/myreads-app) to your computer
- Navigate to the directory where you saved the folder: MacOS: [`macOS Terminal Navigation`](https://wiki.communitydata.science/MacOS_terminal_navigation). Window:
  [`Windows Terminal Navigation`](https://wiki.communitydata.science/Windows_terminal_navigation)
- install all project dependencies with `npm install`
- start the development server with `npm start`
- Navigate to http://localhost:3000/ on your browser.

### Search Terms

More books can be retrieved from the server on the search page http://localhost:3000/search. Refer to the SEARCH_TERMS.md file

## Contributing

Ifeanyi Owah. Thanks to the Udacity backend server team for the BooksApi file, icons and initial static folder.
