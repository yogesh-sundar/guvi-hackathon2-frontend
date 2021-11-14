import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-wrapper">
      <h1 className="display-3">INDIA’S LEADING EQUIPMENT EXCHANGE</h1>
      <p className="lead-1">
        To launch a business in the equipment rental industry, the available
        pool of information and appropriate guidance is fairly limited. To
        mitigate this problem, this guide intends to provide a broad overview of
        industry dynamics to interested entrepreneurs.
      </p>
      <p className="lead-2">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead-3">
        <Link to="">
          <Button color="primary">Learn More</Button>
        </Link>
      </p>
    </div>
  );
}

export default AboutUs;
