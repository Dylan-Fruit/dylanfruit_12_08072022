import { createContext } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCES,
} from "./UsersDataMocked";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const path = "http://localhost:3000";

  async function getUserData(id) {
    let userDataMocked = USER_MAIN_DATA.find(
      (item) => item.id === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}`);
    let userData = await res.json().catch((error) => {
      return userDataMocked;
    });
    let userDataApi = userData.data;
    return userDataApi ? userDataApi : userDataMocked;
  }

  async function getUserActivity(id) {
    let userActivityMocked = USER_ACTIVITY.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/activity`);
    let userActivity = await res.json().catch((error) => {
      return userActivityMocked;
    });

    let userActivityApi = userActivity.data;
    return userActivityApi ? userActivityApi : userActivityMocked;
  }

  async function getUserSessions(id) {
    let userSessionsMocked = USER_AVERAGE_SESSIONS.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/average-sessions`);
    let userSessions = await res.json().catch((error) => {
      return userSessionsMocked;
    });

    let userSessionsApi = userSessions.data;
    return userSessionsApi ? userSessionsApi : userSessionsMocked;
  }

  async function getUserPerformances(id) {
    let userPerformancesMocked = USER_PERFORMANCES.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/performances`);
    let userPerfomances = await res.json().catch((error) => {
      return userPerformancesMocked;
    });

    let userPerfomancesApi = userPerfomances.data;
    return userPerfomancesApi ? userPerfomancesApi : userPerformancesMocked;
  }

  return (
    <DataContext.Provider
      value={{
        getUserData,
        getUserActivity,
        getUserSessions,
        getUserPerformances,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
