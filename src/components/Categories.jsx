import React from "react";
import "../css/Grid.css";

import { Link } from "react-router-dom";

const Categories = () => {
  let img = [
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/941/707/products/heather-tee-mockup-with-a-hanger-floating-against-a-flat-wall-27733-28x1-59c9ca03178ad05e1a15891446393938-1024-1024.png",
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/142/133/products/whatsapp-image-2022-03-22-at-3-30-43-pm1-f08cec60e48ef04e0216479748309886-640-0.jpeg",
    "https://d2r9epyceweg5n.cloudfront.net/stores/002/904/304/products/dsc08342-2-51-3ba1aec4891b43357d16777970655851-640-0.webp",
  ];
  return (
    <>
      <h2 className="mt-5 mb-5">Nuestras categorias famosas</h2>
      <div className="row ">
        <Link to="/categories/aesthetic">
          <div className="col-sm-4 flex-column ">
            <p>Aesthetic </p>

            <img className="border-examples" src={img[0]} alt="" />
          </div>
        </Link>

        <Link to="/categories/oversize">
          <div className="col-sm-4">
            <p>Oversized</p>

            <img className="border-examples" src={img[1]} alt="" />
          </div>
        </Link>

        <Link to="/categories/urban">
          <div className="col-sm-4">
            <p>Urban</p>

            <img className="border-examples" src={img[2]} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Categories;
