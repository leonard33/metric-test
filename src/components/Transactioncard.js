import React from "react";
import "./Transactioncard.css";
import PropTypes from "prop-types";

const Transactioncard = ({
  icon,
  titleright,
  yesterday,
  friday,
  titleleft,
  subtitle,
  description,
  permision,
  badge,
}) => {
  return (
    <div className="transactions">
      <div className="serches">
        <div className="serch-pack">
          <div className="serch-icon">{icon}</div>
        </div>
      </div>
      <div className="search-detail">
        <div className="search-percentage">
          <h4 className="sirch">{titleright}</h4>
          <div className="badge">{badge}</div>
        </div>
        <h4 className="yesteday">
          {yesterday} <span className="yest">yesterday</span>
        </h4>
        <h4 className="yesteday">
          {friday}
          <span className="yest">Last Friday</span>
        </h4>
      </div>
      <div className="transaction-detail">
        <h4>{titleleft}</h4>
        <h4>{subtitle}</h4>
        <div className="description">{description}</div>
        <p className="permison">
          <span className="help">Help: </span>
          {permision}
        </p>
      </div>
    </div>
  );
};

Transactioncard.propTypes = {
  icon: PropTypes.object,
  titleright: PropTypes.string,
  yesterday: PropTypes.string,
  friday: PropTypes.string,
  titleleft: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  permision: PropTypes.string,
  badge: PropTypes.string,
};

export default Transactioncard;
