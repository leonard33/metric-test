import React from "react";
import "./Errorcard.css";
import PropTypes from "prop-types";
import { FaCircle } from "react-icons/fa";

const Errorcard = ({ error, zeros, timeouts }) => {
  return (
    <div className="error">
      <div className="error-top">
        <div className="error-wrapper">
          <div className="error-pack">
            <FaCircle color="green" />
            <div className="errors">Error: {error}%</div>
          </div>
          <span>Average: 0.11%</span>
        </div>
        <div className="zero-wrapper">
          <div className="zero-pack">
            <FaCircle color="green" />
            <div className="zeros">Zeroes: {zeros}</div>
          </div>
          <span>Average: 0.11%</span>
        </div>
        <div className="timeout-wrapper">
          <div className="timeout-pack">
            <FaCircle color="green" />
            <div className="timeout">Timeouts: {timeouts}</div>
          </div>
          <span>Average: 0.11%</span>
        </div>
      </div>
      <div className="decorator">
        <div className="right"></div>
        <div className="nextright"></div>
        <div className="nextleft"></div>
        <div className="left"></div>
      </div>
      <div className="error-bottom">
        <div className="pix">
          <div className="pixpoint"></div>
          <div className="pix-one">
            <p>ERROR 500: 1 256</p>
          </div>
        </div>
        <div className="pix">
          <div className="pixpoint"></div>
          <div className="pix-one">
            <p>ERROR 500: 1 256</p>
          </div>
        </div>
        <div className="pix">
          <div className="pixpoint"></div>
          <div className="pix-one">
            <p>ERROR 500: 1 256</p>
          </div>
        </div>
        <div className="pix">
          <div className="pixpoint"></div>
          <div className="pix-one">
            <p>ERROR 500: 1 256</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Errorcard.propTypes = {
  error: PropTypes.number,
  zeros: PropTypes.number,
  timeouts: PropTypes.number,
};

export default Errorcard;
