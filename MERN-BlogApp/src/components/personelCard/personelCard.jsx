import React from "react";
import "../personelCard/personelCard.css";
function personelCard() {
  return (
    <div className="personelCard">
      <div>
        <img
          src="https://demo.htmlcodex.com/1049/personal-blog-template/img/profile.jpg"
          alt=""
        />
        <h1>Kate Glover</h1>
        <p>
          Justo stet no accusam stet invidunt sanctus magna clita vero eirmod,
          sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam
          justo
        </p>
      </div>
      <div>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-threads"></i>
      </div>
    </div>
  );
}

export default personelCard;
