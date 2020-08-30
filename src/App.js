import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {

  const [ category, updateCategory ] = useState("");
  const [ news, updateNews ] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {

      //! DELETE THE API KEY WHEN PUSH TO GITHUB
      const key = "##########";
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${key}`;

      const response = await fetch(url);
      const news = await response.json();

      updateNews(news.articles);
    }
    consultAPI();
  }, [category])
 

  return (
    <Fragment>
      <Header 
        title="Buscador de Noticias"
      />  

      <div className="container white"> 
        <Form 
          updateCategory={updateCategory}
        />

        <NewsList 
          news={news}
        />

      </div>
    </Fragment>
  );
}

export default App;
