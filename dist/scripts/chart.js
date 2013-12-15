var data =[
    {
      "key" : "Yearly Reports" ,
      "values" : [
      [ 1358228714393, 3545],
      [ 1358228714593, 3595],
      [ 1358188200000, 3635],
      [ 1358188201000, 3725],
      [ 1360907124001, 3890],
      [ 1360907124001, 3890],
      [ 1363326335329, 3400],
      [ 1363326335329, 3400],
      [ 1366004743561, 3667],
      [ 1366004743561, 3667],
      [ 1368596752537, 3980],
      [ 1368596752537, 3980],
      [ 1371234600000, 4450],
      [ 1371234600000, 4450],
      [ 1373867173544, 4890],
      [ 1373867173544, 4890],
      [ 1376505000000, 4990],
      [ 1376505000000, 4990],
      [ 1379183400000, 4120],
      [ 1379183400000, 4120],
      [ 1381775400000, 3784],
      [ 1381775400000, 3784],
      [ 1384494407119, 3400],
      [ 1384494407119, 3400],
      [ 1387086415567, 2589],
      [ 1387086415567, 2589],
      [ 1387045800000, 2412],
      [ 1387045800000, 2412],
      ]

},
];


nv.addGraph(function() {
    var chart = nv.models.stackedAreaChart()
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1] })
                .clipEdge(true);

    chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

    chart.yAxis
      .tickFormat(d3.format(',.2f'));

    d3.select('svg')
    .datum(data)
      .transition().duration(500).call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
