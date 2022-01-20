import React from 'react';
import { Link } from 'react-router-dom';
import james from './PFPs/james.png';
import phoenix from './PFPs/phoenix.png';
import mark from './PFPs/mark.png';
import chase from './PFPs/chase.png';
import brett from './PFPs/brett.png';

// import Autocomplete from '../../AutoComplete';
// import ProductsCard from '../Products/ProductsCard';

export default function AboutUs() {
  return (
    <div className="pfp">
      {/* <br></br>
      <br></br>
      <section>
        <div className="searchbarsearch">
          <Autocomplete Products={ProductsCard} />
        </div>
      </section> */}
      <br></br>
      <br></br>
      <h1>About Us</h1>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/james-demiraiakian/' }} target="_blank">
        <img src={james}></img>
        <h2>James</h2>
      </Link>
      <p>
        The SoCal Saber wielding developer who has the natural understanding of complex code
        spanning through the whole project and into the database through hard work and dedication to
        his studies. James is the coding Wizard of the group, able to solve problems and foresee
        future issues before they become issues.
      </p>
      <br></br>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/mark-voltaire-4907091bb/' }}
        target="_blank"
      >
        <img src={mark}></img>
        <h2>Mark</h2>
      </Link>
      <p>
        THE up and coming Software Developer from Miami, Florida. Mark built out functional buttons
        that communicated with the database, CSS, and edit products. Mark’s mind is designed to
        understand development at a fundamental level and is a solid and reliable member of the team
      </p>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/gregory-crowder/' }} target="_blank">
        <img src={chase}></img>
        <h2>Chase</h2>
      </Link>
      <p>
        The sole Developer based in Portland of the group. Chase’s big dreams become reality to his
        attention to detail and making sure no corners are cut. Chase worked extensively in
        connecting the database to the project through search implementation and routing in the nav
        bars.
      </p>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/phoenix-nicholson/' }} target="_blank">
        <img src={phoenix}></img>
        <h2>Phoenix</h2>
      </Link>
      <p>
        Washington Native, and now a California Dreamer, Phoenix had no fear when facing new and
        complex challenges of the project. With lots of time to grow and learn, Phoenix will be
        ahead of the curve of any young developer, and easily transition to a knowledgeable and
        confident tech lead before you know it. Snatch him up NOW!
      </p>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/brett-seifried/' }} target="_blank">
        <img src={brett}></img>
        <h2>Brettford</h2>
      </Link>
      <p>
        The other PNW developer who worked on Routing, Edit Products, and this page you’re reading
        right now! As a father and a developer, Brettford couldn’t ask for more. Also, as a veteran,
        utilizing his experience in planning and coordination, he helped keep the project on track,
        hitting all the checkpoints to deliver an MVP project on time.
      </p>
    </div>
  );
}
