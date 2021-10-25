import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import CorporateOnlineLearning from './components/CorporateOnlineLearning/CorporateOnlineLearning';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseEnroll from './components/CourseEnroll/CourseEnroll';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (

    <div className="App">
      <Router>
        <ScrollToTop>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
              <Services></Services>
            </Route>

            <Route path="/home">
              <Home></Home>
              <Services></Services>
            </Route>

            <Route path="/services">
              <Courses></Courses>
            </Route>

            <Route path="/service/:courseID">
              <CourseEnroll></CourseEnroll>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/business">
              <CorporateOnlineLearning></CorporateOnlineLearning>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </ScrollToTop>
      </Router>
    </div>

  );
}

export default App;
