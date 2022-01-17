import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["chart", "report"]

  connect() {
    this.chart = new Chartkick.LineChart(this.chartTarget, this.data)
  }

  reportTargetConnected() {
    if (this.chart) {
      this.chart.updateData(this.data)
    }
  }

  reportTargetDisconnected() {
    if (this.chart) {
      this.chart.updateData(this.data)
    }
  }

  get data() {
    let data = {}

    this.reportTargets.forEach((report) => {
      data[report.dataset.date] = report.dataset.value
    })

    return data
  }
}
