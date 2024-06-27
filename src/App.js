import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleOpenSignInModal = () => {
    setActiveModal("SignIn");
  };

  const handleOpenSignUpModal = () => {
    setActiveModal("SignUp");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <div className="SearchForm">
        <Header />
        <Navigation
          onSignIn={handleOpenSignInModal}
          onSignUp={handleOpenSignUpModal}
          onCreateModal={handleCreateModal}
        />
        <SearchForm />
        {activeModal === "SignIn" && (
          <SignInModal
            onClose={handleCloseModal}
            openSignInModal={handleOpenSignInModal}
            openSignUpModal={handleOpenSignUpModal}
          />
        )}

        {activeModal === "SignUp" && (
          <SignUpModal
            onClose={handleCloseModal}
            openSignUpModal={handleOpenSignUpModal}
            openSignInModal={handleOpenSignInModal}
          />
        )}
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
