import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

// Default search data
const defaultSearch = [
  "What is slack connect?",
  "Slack Digital HQ",
  "Working with external organizations in Slack",
  "How much does Slack cost?",
  "Using Slack for remote work",
  "Webinars: Learn Slack basics and more",
  "What are Slack's security features?",
  "Learn about Enterprise Grid",
  "Get Slack certified",
];

export default function Search() {
  // State variables
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchResultActive, setIsSearchResultActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Effect to update search results when searchVal changes
  useEffect(() => {
    let debounce = setTimeout(() => {
      // Filter the default search data based on the search value
      const filteredResults = defaultSearch.filter((result) =>
        result.toLowerCase().includes(searchVal.toLowerCase())
      );
      console.log(filteredResults);
      setSearchResults(filteredResults);
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchVal]);

  // Event handlers
  const handleSearchInput = (e) => {
    // Update search value on input change
    setSearchVal(e.target.value);
    setIsSearchResultActive(true); // Show search results
  };

  const handleSearchBlur = () => {
    // Hide search results after a brief delay when input loses focus
    setTimeout(() => {
      setIsSearchResultActive(false);
    }, 400);
  };

  const handleSearchClose = () => {
    // Close the search input field
    setIsSearchActive(false);
  };

  const handleSubmitForm = () => {
    // Submit the search form
    document.getElementById("myForm").submit();
  };

  return (
    <div className="search-wrapper">
      <button className="btn-search" onClick={() => setIsSearchActive(true)}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className={`search-wrap ${isSearchActive ? "active" : ""}`}>
        <form
          id="myForm"
          action="https://slack.com/intl/en-in/answers"
          className="search"
          autoComplete="off"
          target="_blank"
        >
          {/* Logo */}
          <Logo Default={false} extraClass="web" />

          <button className="btn-search" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <div className="search-group">
            {/* Search Input */}
            <input
              type="text"
              className="search-input"
              name="query"
              placeholder="Find anything (ie. channels, emoji, or reset password)"
              autoComplete="off"
              value={searchVal}
              onInput={handleSearchInput}
              onBlur={handleSearchBlur}
            />
            <button
              className="btn-search-close"
              type="button"
              onClick={handleSearchClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            {/* Search Results */}
            <ul
              className={`search-list ${isSearchResultActive ? "active" : ""}`}
            >
              {searchResults.map((result, index) => (
                <li
                  className="search-item"
                  key={index}
                  type="button"
                  value={result}
                  onClick={() => {
                    setSearchVal(result);
                    handleSubmitForm();
                  }}
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-group web">
            <button className="btn btn-primary-outline">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
