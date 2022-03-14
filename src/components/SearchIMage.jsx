import React from "react";
import styled from "styled-components";
const SearchIMage = () => {
  return (
    <SearchWrapper>
      <form action="#">
        <input type="text" placeholder="Search 👉" />
        <button className="searchBtn">Search</button>
      </form>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  form .searchBtn {
    padding: 6px 10px;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: white;
    box-shadow: inset 10px 10px 15px white;
    margin: 0 10px;
    cursor: pointer;
  }
  form input {
    width: 400px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
  }
`;

export default SearchIMage;
