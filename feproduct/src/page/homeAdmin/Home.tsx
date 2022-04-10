import React from 'react';
import "./Home.scss";
import Sidebar from "../../component/adminNew/sidebar/Sidebar";
import Navbar from "../../component/adminNew/navbar/Navbar";
import "./Home.scss";
import Widget from "../../component/adminNew/widget/Widget";
import Featured from "../../component/adminNew/featured/Featured";
import Chart from "../../component/adminNew/chart/Chart";
import Table from "../../component/adminNew/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home;
