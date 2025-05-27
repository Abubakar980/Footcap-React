// Collection.jsx
import React from 'react';
import './Collection.css';

const Collection = () => {
  return (
    <div className="collections">
      <div className="collections-content">
        <div className="collect-one">
          <div className="collect-one-content">
            <h3>Men Collections</h3>
            <div className="collect-one-btn">
              <span>
                Explore All<i className="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="collect-two">
          <div className="collect-two-content">
            <h3>Women Collections</h3>
            <div className="collect-two-btn">
              <span>
                Explore All<i className="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="collect-three">
          <div className="collect-three-content">
            <h3>Sports Collections</h3>
            <div className="collect-three-btn">
              <span>
                Explore All<i className="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
