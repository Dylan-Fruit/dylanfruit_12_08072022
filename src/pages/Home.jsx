import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../DataContext";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Sideicons from "../components/Sideicons";
import BarCharts from "../components/BarCharts";
import RadarCharts from "../components/RadarCharts";
import LineCharts from "../components/LineCharts";
import RadialBarCharts from "../components/RadialBarCharts";

/**
 * Home Page
 * @returns {JSX}
 */

const Home = () => {
  const { id } = useParams();

  const dataSeekers = useContext(DataContext);
  const { getUserData, getUserActivity, getUserSessions, getUserPerformance } =
    dataSeekers;

  const [userData, setUserData] = useState([]);
  const [userActivity, setUserActivity] = useState({ data: [] });
  const [userSessions, setUserSessions] = useState({ data: [] });
  const [userPerformance, setUserPerformance] = useState({ data: [] });

  useEffect(() => {
    getUserData(id).then((response) => {
      setUserData(response);
    });
    getUserActivity(id).then((response) => {
      setUserActivity(response);
    });
    getUserSessions(id).then((response) => {
      setUserSessions(response);
    });
    getUserPerformance(id).then((response) => {
      setUserPerformance(response);
    });
  }, [id, getUserData, getUserActivity, getUserSessions, getUserPerformance]);

  if (userData.length === 0) {
    return <Loader />;
  }

  return (
    <div className="home">
      <Header />
      <div className="main-container">
        <Navbar />
        <div className="main-content-container">
          <div className="title">
            <h1>
              Bonjour <span>{userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="stats-container">
            <div className="user-stats-container">
              <div className="main-stats-container">
                <BarCharts userActivity={userActivity} />
              </div>
              <div className="second-stats-container">
                <LineCharts userSessions={userSessions} />
                <RadarCharts userPerformance={userPerformance} />
                <RadialBarCharts userData={userData} />
              </div>
            </div>
            <div className="side-icons-container">
              <Sideicons
                type="Calories"
                value={userData.keyData.calorieCount}
              />
              <Sideicons
                type="Proteines"
                value={userData.keyData.proteinCount}
              />
              <Sideicons
                type="Glucides"
                value={userData.keyData.carbohydrateCount}
              />
              <Sideicons type="Lipides" value={userData.keyData.lipidCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
