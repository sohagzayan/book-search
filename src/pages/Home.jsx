import axios from "axios";
import React from "react";
import styled from "styled-components";
import cover_image from "../assets/background image/banner-bg.jpg";
import BookSlider from "../components/BookSlider";
import PerBook from "../components/PerBook";
import SearchIMage from "../components/SearchIMage";
const Home = () => {
  const baseUrl = `https://openlibrary.org/search.json?q=book%20name`;
  axios(baseUrl).then((res) => console.log(res.data.docs));

  return (
    <Wrapper>
      <HeroSection>
        <Content>
          <BookSlider />
          <SearchIMage />
        </Content>
        <PerBook />
      </HeroSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
`;

const HeroSection = styled.div`
  background-image: url(${cover_image});
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  flex-direction: column;
`;
export default Home;
