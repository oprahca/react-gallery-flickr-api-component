import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";

const api_key = "ca370d51a054836007519a00ff4ce59e";

export default function Search(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  };

  useEffect((text = "coffee") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${text}&per_page=16&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setData(res.data.photos.photo);
        setLoading(false);
        setQuery(text);
      })
      .catch((err) => console.log("Error: " + err));
  }),[];

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={onSearchChange}
          id="search"
          name="search"
          placeholder="Search..."
        />
        <button type="submit" className="search-button" id="searchButton">
          <svg
            fill="#fff"
            height="24"
            viewBox="0 0 23 23"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
      <div>
        <h2>{query} Images</h2>
        <div id="result">
          <div className="photo-container">
          {loading ? <p>Loading</p> : <PhotoContainer data={data} />}
        </div>
        </div>
      </div>
    </div>
  );
}
