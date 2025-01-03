import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar.jsx";
import ItemList from "./components/ItemList.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

const App = () => {
  const [items, setItems] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("Avengers"); 


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=c6004d40&s=${searchTerm}`
        );

        if (response.data.Search) {
          setItems(response.data.Search); 
        } else {
          setItems([]); 
        }
      } catch (error) {
        console.error("Error fetching data from OMDB API:", error);
      }
    };

    fetchItems();
  }, [searchTerm]);

  return (
    <div>
      <NavBar />
      <div class="container">
      <h1 class="title">Movies inspiration</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ItemList items={items} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

