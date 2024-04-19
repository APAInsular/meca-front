import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "src/styles/Progress.css";

const ProgressBar = () => {
  const allItems = document.querySelectorAll(".navmenu ul li a");

  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove("active");
      }
      this.classList.add("active");
    });
  });
  return (
    <div className="progress_menu">
      <ul>
        <li>
          <a href="#" className="active">
            Services
          </a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
