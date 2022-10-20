export default class UserActivityFormater {
  constructor({ sessions, userId }) {
    this.id = userId;
    this.sessions = sessions.map((session, index) => ({
      ...session,
      kilogram: session.kilogram,
      calories: session.calories,
      day: (index + 1).toString(),
    }));
  }
}
