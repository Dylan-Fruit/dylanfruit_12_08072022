import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./UsersDataMocked";

const mockedDatas = true;
const path = "https://localhost:3000";

export const getUserData = async (id) => {
  let userDataMocked = USER_MAIN_DATA.find((item) => item.id === parseInt(id));

  try {
    if (mockedDatas) {
      return userDataMocked;
    }
    const response = await fetch(`${path}/user/${id}`);
    const mainData = await response.json();
    return mainData.data;
  } catch (error) {
    console.log("erreur" + error);
  }
};

/**
 * getUserActivity
 * @function getUserActivity
 * @param {number} id
 * @returns userActivityMocked | userActivityApi
 */

export const getUserActivity = async (id) => {
  let userActivityMocked = USER_ACTIVITY.find(
    (item) => item.userId === parseInt(id)
  );

  try {
    if (mockedDatas) {
      return userActivityMocked;
    }
    const response = await fetch(`${path}/user/${id}/activity`);
    const activityData = await response.json();
    return activityData.data;
  } catch (error) {
    console.log("erreur" + error);
  }
};

/**
 * getUserSessions
 * @function getUserSessions
 * @param {number} id
 * @returns userSessionsMocked | userSessionsApi
 */

export const getUserSessions = async (id) => {
  let userSessionsMocked = USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === parseInt(id)
  );
  try {
    if (mockedDatas) {
      return userSessionsMocked;
    }
    const response = await fetch(`${path}/user/${id}/average-sessions`);
    const averageSessionsData = await response.json();
    return averageSessionsData.data;
  } catch (error) {
    console.log("erreur" + error);
  }
};

/**
 * getUserPerformance
 * @function getUserPerformance
 * @param {number} id
 * @returns userPerformanceMocked | userPerformanceApi
 */

export const getUserPerformance = async (id) => {
  let userPerformanceMocked = USER_PERFORMANCE.find(
    (item) => item.userId === parseInt(id)
  );
  try {
    if (mockedDatas) {
      return userPerformanceMocked;
    }
    const response = await fetch(`${path}/user/${id}/performance`);
    const performanceData = await response.json();
    return performanceData.data;
  } catch (error) {
    console.log("erreur" + error);
  }
};
