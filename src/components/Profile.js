import React from "react";
import Footer from "./Footer";
import "../css/Footer.css";

function Profile() {
    if (localStorage.getItem("signedIn") === "true")
  return (
    <h2
    style={{
      paddingTop: "85px",
      color: "green",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Favorites
  </h2>
  ); else {
      return (
        <h2
        style={{
          paddingTop: "85px",
          color: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        You are not signed in yet!
      </h2>
      );
  }
}

export default Profile;
