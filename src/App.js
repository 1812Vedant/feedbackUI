import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Header from "./components/Headers";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import AboutIconLink from "./components/AboutIconsLink";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutPost from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />

                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<AboutPost />}></Route>
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
