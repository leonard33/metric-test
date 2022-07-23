import React from "react";
import "./Metric.css";
import Errorcard from "./Errorcard";
import Transactioncard from "./Transactioncard";
import * as record from "../data.json";
import { BsFillFunnelFill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const records = record;
const Yesterday = () => {
  return (
    <div className="container">
      <Errorcard
        error={records.data[0].errors_yesterday || 0}
        zeros={records.data[0].zeros_yesterday || 0}
        timeouts={records.data[0].timeouts_yesterday || 0}
      />
      <Transactioncard
        icon={<BsFillFunnelFill size={25} color={"white"} />}
        titleright="searches"
        yesterday={records.data[0].searches_yesterday || 0}
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
        yesterday={records.data[0].clicks_current_yesterday}
        friday={records.data[0].clicks_previous_yesterday}
        titleleft="CTR: 0,04%"
        description="you get 100% on mobile and desktop device"
        permision="searches, permision"
        badge="-30%"
      />
      <hr />
      <Transactioncard
        icon={<AiOutlineShoppingCart size={25} color={"white"} />}
        titleright="Sales"
        yesterday={records.data[0].sales_yesterday}
        friday={29380}
        titleleft="Mobile traffic 100%"
        subtitle="Mobile traffic 100%"
        description="you get 100% on mobile and desktop device"
        permision="searches, permision"
      />
      <hr />
    </div>
  );
};

export default Yesterday;
