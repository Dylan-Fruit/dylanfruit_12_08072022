export default class MainDataFormater {
  constructor(data) {
    this.is = data.id;
    this.userFirstName = data.userInfos.firstName;
    this.keyData = data.keyData;
    this.todayScore = data.todayScore || data.score;
    this.score = this.formatScore(this.todayScore);
  }

  formatScore() {
    return [{ value: this.todayScore * 100 }];
  }
}
