var drawChart = function(){
    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .staggerLabels(true)
          .tooltips(false)
          .showValues(true)
      
        d3.select('#chart svg')
          .datum(chartData)
          .transition().duration(500)
          .call(chart);
      
        nv.utils.windowResize(chart.update);
      
        return chart;
      });
      
}

$(function() {
    $("#btnLoadChart").click(function(){
        console.log('drow chart');
        $('#chart').toggle(1000);
        drawChart();
    });
});