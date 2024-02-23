import React, { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { Heart, Person,Cart2 } from "react-bootstrap-icons";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );
  

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar shadow-sm">
      <div className="container">
        <div className="logo title-primary color-green font-bold">
          VEIRDO
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements z-index-99999  ${showNavbar && "active"}`}>
          <ul className="mb-0">
            <li>
              <a href="#">NEW ARRIVALS</a>
            </li>
            <li>
              <a href="#">MEN</a>
            </li>
            <li>
              <a href="#">WINTER COLLECTION</a>
            </li>
            <li>
              <a href="#">SHOP BY MERCH</a>
            </li>
            <li>
              <a href="#">UNISEX</a>
            </li>
            <li>
              <Button className="bg-light p-0 border-0">
                <Heart className="text-secondary title-primary"/>
              </Button>
            </li>
            <li>
            <Button className="bg-light p-0 border-0">
                <Person className="text-secondary title-primary"/>
                </Button>
            </li>
            <li>
            <Button className="bg-light p-0 border-0">
              
                <Cart2 className="text-secondary title-primary"/>
                <Badge bg="danger" pill>New</Badge>
                </Button>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};
export default Navbar;