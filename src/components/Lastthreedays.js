import React from "react";
import "./Metric.css";
import Errorcard from "./Errorcard";
import Transactioncard from "./Transactioncard";
import * as record from "../data.json";
import { BsFillFunnelFill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const records = record;
const Lastthreedays = () => {
  return (
    <div className="container">
      <Errorcard
        error={records.data[0].errors_last_3days}
        zeros={records.data[0].zeros_last_3days}
        timeouts={records.data[0].timeouts_last_3days}
      />
      <Transactioncard
        icon={<BsFillFunnelFill size={25} color={"white"} />}
        titleright="searches"
        yesterday={records.data[0].searches_last_3days}
        friday={29380}
        titleleft="Mobile traffic 100%"
        subtitle="Mobile traffic 100%"
        description="you get 100% on mobile and desktop device"
        permision="searches, permision"
        badge="+50%"
      />
      <hr />
      <Transactioncard
        icon={<GiClick size={25} color={"white"} />}
        titleright="Clicks"
        yesterday={records.data[0].clicks_current_last_3days}
        friday={29380}
        titleleft="CTR: 0,04%"
        description="you get 100% on mobile and desktop device"
        permision="searches, permision"
        badge="-30%"
      />
      <hr />
      <Transactioncard
        icon={<AiOutlineShoppingCart size={25} color={"white"} />}
        titleright="Sales"
        yesterday={records.data[0].sales_last_3days}
        friday={29380}
        titleleft="STR 6.2%"
        subtitle="AVG. Check:8903"
        description="you get 100% on mobile and desktop device"
        permision="searches, permision"
      />
      <hr />
    </div>
  );
};

export default Lastthreedays;
