import React from 'react';
import './BrandStrip.css';

const BrandStrip = () => {
  return (
    <div className="brand-strip-container">
      <div className="container-fluid">
        <div className="d-flex justify-content-around align-items-center brand-strip-inner">
          <img src="/assets/versace.svg" alt="Versace" className="versace" />
          <img src="/assets/zara.svg" alt="zara" className="brand-logo" />
          <img src="/assets/gucci.svg" alt="guuci" className="brand-logo" />
          <img src="/assets/prada.svg" alt="prada" className="brand-logo" />
          <img src="/assets/calvinklein.svg" alt="Calvin Klein" className=" calvinklein" />
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;
