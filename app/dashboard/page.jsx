import React from "react";
import Card1 from "../ui/dashboard/card1/card1";
import Card2 from "../ui/dashboard/card2/card2";
import Card3 from "../ui/dashboard/card3/card3";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import style from "../ui/dashboard/dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.card}>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={style.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
