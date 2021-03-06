/*$(document).ready(function(){


});*/

window.onload = function () {
    var chartone = new CanvasJS.Chart("chartContainer",
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

    var charttwo = new CanvasJS.Chart("chartContainerBubble",
    {
      zoomEnabled: true,
      title:{
        text: "Employment In Agriculture VS Agri-Land and Population"      
        
      },
      axisX: {
        title:"Employment - Agriculture",
        
        valueFormatString: "#0'%'",
        maximum: 100,
        gridThickness: 1,
        tickThickness: 1,
        gridColor: "lightgrey",
        tickColor: "lightgrey",
        lineThickness: 0
      },
      axisY:{
        title: "Agricultural Land(sq.km)",              
        gridThickness: 1,
        tickThickness: 1,
        gridColor: "lightgrey",
        tickColor: "lightgrey",
        lineThickness: 0,                
        valueFormatString: "#0'mn'"

      },

      data: [
      {        
        type: "bubble",                   
        toolTipContent: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span><br/><strong>Employment</strong> {x}% <br/> <strong>Agri Land</strong> {y} million sq. km<br/> <strong>Population</strong> {z} mn",
        dataPoints: [

        { x: 39.6, y: 5.225, z:1347,  name:"China" },
        { x: 3.3, y: 4.17, z:21.49,  name:"Australia" },
        { x: 1.5, y: 4.043, z:304.09,  name:"US" },
        { x: 17.4, y: 2.647, z:2.64,  name:"Brazil" },
        { x: 8.6, y: 2.154, z:141.95,  name:"Russia" },
        { x: 52.98, y: 1.797, z:1190.86,  name:"India" },
        { x: 4.3, y: 1.735, z:26.16,  name:"Saudi Arabia" },
        { x: 1.21, y: 1.41, z:39.71,  name:"Argentina" },
        { x: 5.7, y: .993, z:48.79,  name:"SA" },
        { x: 13.1, y: 1.02, z:110.42,  name:"Mexico" },
        { x: 2.4, y: .676, z:33.31,  name:"Canada" },
        { x: 2.8, y: .293, z:64.37,  name:"France" },
        { x: 3.8, y: .46, z:127.70,  name:"Japan" },
        { x: 40.3, y: .52, z:234.95,  name:"Indonesia" },
        { x: 42.3, y: .197, z:68.26,  name:"Thailand" },
        { x: 31.6, y: .35, z:78.12,  name:"Egypt" },
        { x: 1.1, y: .176, z:61.39,  name:"U.K" },
        { x: 3.7, y: .144, z:59.83,  name:"Italy" },
        { x: 1.8, y: .169, z:82.11,  name:"Germany" }




        ]
      }
      ]
    });

chartone.render();
charttwo.render();

}