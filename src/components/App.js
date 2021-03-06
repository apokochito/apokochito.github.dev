import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import "./../assets/css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Intro from "./Intro";
import Main from "./Main";
import Blog from "./Blog";
import Work from "./Work";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Note from "./Note";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const IconLinks = ({ href, icon }) => (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
  const contact = (
    <React.Fragment>
      <ul>
        <IconLinks href="mailto:diana.apolinar@hotmail.com" icon={faEnvelope} />
        <IconLinks
          href="https://www.linkedin.com/in/dianaepinto/"
          icon={faLinkedin}
        />
        <IconLinks href="https://github.com/apokochito" icon={faGithub} />
      </ul>
    </React.Fragment>
  );
  const notes = [
    { title: "Contact", content: contact },
    {
      title: "Company",
      content: "I'm currently working at Softtek.",
    },
    {
      title: "Communities",
      content: "I'm a volunteer at Women Who Code Colima - Codificadas.",
    },
    {
      title: "Education",
      content:
        "I'm a telematics engineer and I'm a master's student in Computer Security.",
    },
    {
      title: "Technologies I have worked with",
      content: "Java with Spring mostly.",
    },
  ];
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="wrapper">
          <Router>
            <div className="box-menu">
              <Nav />
              <div id="background-mode">
                <Button
                  id="theme"
                  type="button"
                  variant="outline-light"
                  style={{
                    width: "auto",
                    height: "30px",
                    margin: "5px",
                    border: 0,
                    padding: 0,
                  }}
                  onClick={themeToggler}
                >
                  <h1 id="technique-one">
                    <span>CSS-Tricks</span>
                  </h1>
                </Button>
              </div>
            </div>
            <div className="box-presentation">
              <Route exact path="/">
                <div id="main-text">
                  <Main />
                </div>
              </Route>
              <Route path="/about">
                <Intro />
                <div className="notes">
                  {notes.map((note, i) => (
                    <Note title={note.title} key={i} content={note.content} />
                  ))}
                </div>
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
            </div>
            <div className="box-footer">
              <Footer />
            </div>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
