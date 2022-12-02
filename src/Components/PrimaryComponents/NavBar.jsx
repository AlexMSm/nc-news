import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo1 from "../../Images/logo1.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import ProfileButton from "../BaseComponents/ProfileButton";
import { Link } from "react-router-dom";
import ncnewsmain from "../../Images/nc-news-main-trim.png";
import ncemblem from "../../Images/nc-emblem.png";
import ncnewsshort from "../../Images/nc-news-short.png";

export default function NavBar() {
  const [navState, setNavState] = useState(false);
  const [smallLogo, setSmallLogo] = useState(false);

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 1000) {
        setSmallLogo(true);
      } else if (smallLogo && window.innerWidth > 1000) {
        setSmallLogo(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Nav>
      <div className="brand">
        <div className="branding">
          <div className="emblem">
            <img src={ncemblem} alt="brand emblem" />
          </div>
          <div className="logo">
            <img src={smallLogo ? ncnewsshort : ncnewsmain} alt="brand logo" />
          </div>
        </div>
        <div className="toggle">
          <div className="toggle-menu">Menu</div>
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
            <Link className="home-link" to={"/"}>
              <div className="button-link">
                <a>Home</a>
              </div>
            </Link>
          </li>

          <li>
            <Link className="home-link" to={"/"}>
              <div className="button-link">
                <a>Details</a>
              </div>
            </Link>
          </li>
          <li>
            <Link className="home-link" to={"/"}>
              <div className="button-link">
                <a>Contact</a>
              </div>
            </Link>
          </li>
        </ul>
        <div className="login-btn">
          <ProfileButton />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
  border-bottom: 1px darkorange solid;
  .brand {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .branding {
      display: flex;
      align-items: center;
      margin: 0 1vw;
      margin-right: 4vw;
      .logo {
        img {
          height: 7vh;
        }
      }
      .emblem {
        img {
          height: 10vh;
          margin-bottom: 10px;
        }
      }
    }
    .toggle {
      display: none;
    }
  }
  .toggle-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      gap: 3rem;
      width: 5rem;
      li {
        transition: 0.3s ease-in-out;
        &:first-of-type {
          background-color: orange;
          border-radius: 0.4rem;
          a {
            color: black;
          }
        }
        .button-link {
          padding: 0.7rem 1rem;
        }
        &:hover {
          background-color: darkorange;
          border-radius: 0.3rem;
          color: white;
          a {
            color: white;
            font-type: bold;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    .branding {
      display: flex;
      align-items: center;
      margin: 0 1vw;
      margin-right: 4vw;
      justify-content: space-between;
      .emblem {
        display: none;
        align-content: center;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1060px) {
    position: relative;
    margin: 0;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .branding {
        .logo {
          display: flex;
        }
      }
      .toggle {
        position: absolute;
        right: 5vw;
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: black;
      z-index: 1;
      opacity: 0.95;
      flex-direction: column;
      margin: 15vh 30% 20%;
      width: 40%;
      padding: 5rem 0;
      border-radius: 20px;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;

/* 
@media screen and (min-width: 280px) and (max-width: 600px) {
  position: relative;
  margin: 0;
  .brand {
    padding: 2rem 1rem;
    justify-content: center;
    width: 100%;
    z-index: 2;
    background-color: var(--background-color);
    .toggle {
      position: absolute;
      right: 5vw;
      display: block;
      color: orange;
      svg {
        font-size: 2rem;
      }
    }
  }
  .links {
    position: absolute;
    center: 1;
    flex-direction: column;
    background-color: orange;
    opacity: 0.8;
    width: 60%;
    padding: 12vh 5vw 5vw;
    transition: 0.4s ease-in-out;
    gap: 2rem;
    border-radius: 10px;
    ul {
      flex-direction: column;
      gap: 1rem;
    li {
      padding: 0.5rem 1rem;
      transition: 0.3s ease-in-out;
      &:first-of-type {
        background-color: blue;
        border-radius: 0.3rem;
        a {
          color: black;
        }
      }}
    .login-btn {
      flex-direction: column;
    }
  }
  .show {
    top: 0;
  }
  .hide {
    top: -600px;
  }
} */
