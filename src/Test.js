import {
  getUserData,
  getUserActivity,
  getUserSessions,
  getUserPerformance,
} from "./DataContext";
import MainDataFormater from "./DataFormaters/MainDataFormater";
import UserSessionFormater from "./DataFormaters/UserSessionsFormater";
import UserActivityFormater from "./DataFormaters/UserActivityFormater";
import UserPerformanceFormater from "./DataFormaters/UserPerformanceFormater";

export async function userHeaderData(id) {
  let mainDatas = {};

  mainDatas = await getUserData(id);
  const userData = new MainDataFormater(mainDatas);
  return userData;
}

export async function userSessionsData(id) {
  let sessionsData = {};

  sessionsData = await getUserSessions(id);
  const getAverageSessions = new UserSessionFormater(sessionsData);
  return getAverageSessions;
}

export async function userActivityData(id) {
  let activityData = {};

  activityData = await getUserActivity(id);
  const getActivity = new UserActivityFormater(activityData);
  return getActivity;
}

export async function userPerformanceData(id) {
  let performanceData = {};

  performanceData = await getUserPerformance(id);
  const getPerformance = new UserPerformanceFormater(performanceData);
  return getPerformance;
}
