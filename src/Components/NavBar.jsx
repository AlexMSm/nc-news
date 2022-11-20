import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../Images/logo1.png";
import emblem from "../Images/NC-news-logo.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import ProfileButton from "./BaseComponents/ProfileButton";

export default function NavBar() {
  const [navState, setNavState] = useState(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo1} alt="brand logo" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#details">Details</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="login-btn">
          <button>Login/Registration</button>
          <ProfileButton />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease;
        border-radius: 0.3rem;
        &:first-of-type,
        &:hover {
          background-color: orange;
          a {
            color: blue;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        border: 1px solid orange;
        background-color: transparent;
        color: white;
        border-radius: 0.5rem;
        padding: 0.5rem;
        /*      display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem; */
        font-weight: bold;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;
