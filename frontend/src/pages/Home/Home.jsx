import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/SideBar/SideBar';
import departments from '../../data/departments'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <SideBar />
        <div className="home-container">
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <img src={dept.image} alt={dept.title} />
              <div className="department-info">
                <h3>{dept.title}</h3>
                <p>{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
