import React, { useEffect, useState } from "react";
import "../personelCard/personelCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

function PersonelCard() {
  const [logIn, setLogIn] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:5000/api/user");
        const data = response.data;
        const user = data.find(
          (item) => item._id === JSON.parse(localStorage.getItem("user"))
        );
        if (user) {
          setLogIn(user);
        }
      } catch (error) {
        console.error("Veri alınamadı", error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className="personelCard">
      <div>
        <img
          src="https://demo.htmlcodex.com/1049/personal-blog-template/img/profile.jpg"
          alt=""
        />
        <h1>{logIn.fullname}</h1>{" "}
        {/* Assuming 'name' is a property of the user object */}
        <p>{logIn.aboutme}</p>
      </div>
      <div>
        <a
          target="_blank"
          style={{
            color: "inherit",
            display: logIn.facebook === "" && "none",
          }}
          href={logIn.facebook}
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          target="_blank "
          style={{ color: "inherit", display: logIn.twitter !== "" && "none" }}
          href={logIn.twitter}
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          target="_blank "
          style={{ color: "inherit", display: logIn.linkedin !== "" && "none" }}
          href={logIn.linkedin}
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          target="_blank "
          style={{
            color: "inherit",
            display: logIn.instagram !== "" && "none",
          }}
          href={logIn.instagram}
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          target="_blank "
          style={{
            color: "inherit",
            display: logIn.threads !== "" && "none",
          }}
          href={logIn.threads}
        >
          <i className="bi bi-threads"></i>
        </a>
      </div>
    </div>
  );
}

export default PersonelCard;
