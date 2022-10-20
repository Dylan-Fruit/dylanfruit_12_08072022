export default class UserSessionFormater {
  constructor({ sessions, userId }) {
    this.id = userId;
    this.sessions = this.SessionDay(sessions.day);
    this.sessionsData = sessions.map((session, index) => ({
      ...session,
      sessionLength: session.sessionLength,
      day: this.sessions[index],
    }));
  }

  SessionDay() {
    const formatDay = ["L", "M", "M", "J", "V", "S", "D"];
    return formatDay;
  }
}
