# 📰 News searcher React App

This React app allows the user to search for Argentina news filter by categories such as business, entertainment, health, science and others.
  In this project I make use of custom hooks for the html select element of the form where the user selectw the category that he wants. This allows me to separate responsabilities, the custom hook gets the user selection and the form only sent to the App.js where is used in the useEffect to realize the API consult and get all the news of the wished category. 
  The React concepts in this projects are Components, useEffect, useState, custom hooks, css modules to give styles to the component, consuming an API with async JavaScript function (fetch) and component documentation with prop types.
  
## 🔧 Components
  
  - Header: it shows the title of the page.
  
  - Form: it shows the html select form component that contains all the categories available.
  
  - NewsList: it has the responsability of showing all the news get from the API.
  
  - News: it represent a piece of news that is used by the NewsList component. 
  
  
