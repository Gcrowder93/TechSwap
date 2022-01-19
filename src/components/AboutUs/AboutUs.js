import React from 'react';
import { Link } from 'react-router-dom';

// import Autocomplete from '../../AutoComplete';
// import ProductsCard from '../Products/ProductsCard';

export default function AboutUs() {
  return (
    <div>
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
      <Link to={{ pathname: 'https://www.linkedin.com/in/brett-seifried/' }} target="_blank">
        Brett
      </Link>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/james-demiraiakian/' }} target="_blank">
        James
      </Link>
      <br></br>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/mark-voltaire-4907091bb/' }}
        target="_blank"
      >
        Mark
      </Link>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/gregory-crowder/' }} target="_blank">
        Chase
      </Link>
      <br></br>
      <Link to={{ pathname: 'https://www.linkedin.com/in/phoenix-nicholson/' }} target="_blank">
        Phoenix
      </Link>
    </div>
  );
}
