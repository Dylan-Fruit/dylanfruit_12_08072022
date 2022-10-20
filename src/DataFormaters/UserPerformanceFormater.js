export default class UserPerformanceFormater {
  constructor(performances, kind) {
    this.id = performances.userId;
    this.kindOfPerform = this.KindOfPerformance(kind);
    this.formatPerformData = performances.data.map((performance, kind) => ({
      ...performance,
      kind: this.kindOfPerform[kind],
      value: performance.value,
    }));
    this.performData = this.formatPerformData;
  }

  KindOfPerformance() {
    const formatPerform = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    return formatPerform;
  }
}
