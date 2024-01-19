import { useState } from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Author from "./components/Author";
import CoverPhoto from "./components/CoverPhoto";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CoverPhoto></CoverPhoto>
      <Feature
        title="Create a post"
        info="Share your thoughts and experiences with like minded people. Ask questions and get your answers."
        image="assets/postcreate.jpg"
      ></Feature>
      <Feature
        title="Learn from others and share your knowledge"
        info="Scroll through endless posts by fellow cat parents while leaving comments on posts of interest."
        image="assets/posts.jpg"
      ></Feature>
      <Feature
        title="Try the logged out experience"
        info="Don't want to create an account but want to experience the cat journey of others? Enter KittyKnowhow without signing up."
        image="assets/onboard.jpg"
      ></Feature>
      <About></About>
      <Author></Author>
    </div>
  );
}

export default App;
