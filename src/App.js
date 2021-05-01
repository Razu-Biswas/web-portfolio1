
import './App.css';
import React from "react";
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/ContactUs/ContactUs';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/portfolio">
            <Skills></Skills>
        </Route>
        <Route path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/resume">
            <Resume></Resume>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
       
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
