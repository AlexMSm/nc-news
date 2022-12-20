import { Link } from "react-router-dom";

export default function DetailsPage() {
  return (
    <div className="details-page">
      <h2>Details</h2>
      <p>
        Hi, my name is Alex Smith and this is my first front-end project - thank
        you for taking your time to explore it. NC news is the culmination of
        two solo project phases I completed while on the Northcoders developer
        bootcamp. This web app is built in React.js using Javascript and is fed
        by an API I built from scratch in phase one.
      </p>
      <p>The repo for this app is here:</p>
      <ul>
        <li>https://github.com/AlexMSm/nc-news</li>
      </ul>
      <p>You may find the links for the backend API and repo here:</p>
      <ul>
        <li>https://als-news-app.herokuapp.com/api</li>
        <li>https://github.com/AlexMSm/nc-backend-project</li>
      </ul>

      <h3>Future refactors</h3>
      <ol>
        <li>A Typescript overhaul</li>
        <li>Harmonise styling methods</li>
        <li>Ability to sign in/sign up new users</li>
        <li>Delete an article from the logged-in user's profile page</li>
      </ol>
      <h3>
        <Link to="/Contact"> Contact Me</Link>
      </h3>
    </div>
  );
}
