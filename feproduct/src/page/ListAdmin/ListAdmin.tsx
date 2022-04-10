import React from 'react';
import Sidebar from "../../component/adminNew/sidebar/Sidebar";
import Navbar from "../../component/adminNew/navbar/Navbar";
import Datatable from "../../component/adminNew/datatable/Datatable";
import "./ListAdmin.scss"

const ListAdmin = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
        </div>
      </div>
    );
}

export default ListAdmin;