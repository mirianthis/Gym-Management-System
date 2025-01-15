import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSync } from '@fortawesome/free-solid-svg-icons';
import { relative } from 'path';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public attendanceReportChart: any;
  public totalReportsChart: any;

  faSync = faSync;
  constructor() {

    this.totalReportsChart = {
      animationEnabled: true,
      fontSize: 10,
      title: {
        text: "Total Reports"
      },
      data: [{
        type: "doughnut",
        yValueFormatString: "#,###.##'%'",
        indexLabel: "{name}",
        dataPoints: [
          { y: 28, name: "Members" },
          { y: 10, name: "Trainer" },
          { y: 20, name: "Equipment" },
          { y: 15, name: "Revenue" }
        ]
      }]
    }

    this.attendanceReportChart = {
      animationEnabled: true,
      title: {
        text: "Attendance Reports"
      },
      axisX:{
        lineThickness: 0,
        tickThickness: 0,
        labelFontSize: 0
      },
      axisY:{
        lineThickness: 0,
        gridThickness: 0,
        tickLength: 0,
        labelFontSize: 0
      },
      data: [{
        type: "column",
        color: "#344CB7",
        dataPoints: [
          { label: "Monday", y: 22 },
          { label: "Tuesday", y: 18 },
          { label: "Wednesday", y: 23 },
          { label: "Thursday", y: 25 },
          { label: "Friday", y: 13 },
          { label: "Saturday", y: 15 },
          { label: "Sunday", y: 6 },
        ]
      }, {
        type: "column",
        color: "#85A947",
        dataPoints: [
          { label: "Monday", y: 17 },
          { label: "Tuesday", y: 10 },
          { label: "Wednesday", y: 23 },
          { label: "Thursday", y: 26 },
          { label: "Friday", y: 12 },
          { label: "Saturday", y: 17 },
          { label: "Sunday", y: 3 },
        ]
      }]
    }
  }
}
