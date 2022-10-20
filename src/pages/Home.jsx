import React, { useEffect, useState } from "react";
import {
  userHeaderData,
  userActivityData,
  userPerformanceData,
  userSessionsData,
} from "../Test";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userData = await userHeaderData(id);
        const userActivity = await userActivityData(id);
        const userPerformance = await userPerformanceData(id);
        const userSessions = await userSessionsData(id);

        setData({ userData, userActivity, userPerformance, userSessions });
        setIsLoading(false);
      } catch (error) {
        console.log("error" + error);
        navigate("/Error");
      }
    })();
  }, [navigate, id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home">
          <Header />
          <div className="main-container">
            <Navbar />
            <div className="main-content-container">
              <div className="title">
                <h1>
                  Bonjour <span>{data.userData.userFirstName}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
              </div>
              <div className="stats-container">
                <div className="user-stats-container">
                  <div className="main-stats-container">
                    <BarCharts activity={data.userActivity.sessions} />
                  </div>
                  <div className="second-stats-container">
                    <LineCharts sessions={data.userSessions.sessionsData} />
                    <RadarCharts
                      performance={data.userPerformance.performData}
                    />
                    <RadialBarCharts score={data.userData.score[0].value} />
                  </div>
                </div>
                <div className="side-icons-container">
                  <Sideicons
                    type="Calories"
                    value={data.userData.keyData.calorieCount}
                  />
                  <Sideicons
                    type="Proteines"
                    value={data.userData.keyData.proteinCount}
                  />
                  <Sideicons
                    type="Glucides"
                    value={data.userData.keyData.carbohydrateCount}
                  />
                  <Sideicons
                    type="Lipides"
                    value={data.userData.keyData.lipidCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
