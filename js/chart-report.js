/*$(document).ready(function(){


});*/

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      theme: "theme3",
      title:{
        text: "Week on week performance",
        fontSize: 30
      },
      toolTip: {
        shared: true
      },
      axisX:{
        title: "Days"
      },

      axisY: {
        title: ""
      },
      axisY2: {
        title: "clicks/day"
      },

      legend:{
        verticalAlign: "top",
        horizontalAlign: "center"
      },
      data: [ 
      {
        type: "column", 
        name: "Week 1",
        legendText: "Week 1",
        showInLegend: true, 
        dataPoints:[
        {label: "1", y: 170},
        {label: "2", y: 180},
        {label: "3", y: 100},
        {label: "4", y: 30},
        {label: "5", y: 130},
        {label: "6", y: 200},
        {label: "7", y: 250}


        ]
      },
      {
        type: "column", 
        name: "Week 2",
        legendText: "Week 2",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
        {label: "1", y: 80},
        {label: "2", y: 200},
        {label: "3", y: 120},
        {label: "4", y: 100},
        {label: "5", y: 70},
        {label: "6", y: 40},
        {label: "7", y: 150}


        ]
      }
      
      ],
          legend:{
            cursor:"pointer",
            itemclick: function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          },
        });

chart.render();
}