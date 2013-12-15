var data =[
    {
      "key" : "Yearly Reports" ,
      "values" : [
      [ 1358228714393, 3145],
      // [ 1358188200000, 3635],
      [ 1360907124001, 3590],
      // [ 1360866600000, 3750],
      [ 1363326335329, 3400],
      // [ 1363285800000, 3100],
      [ 1366004743561, 3867],
      // [ 1365964200000, 3890],
      // [ 1368596752537, 3980],
      [ 1368556200000, 4768],
      // [ 1371275160952, 4312],
      [ 1371234600000, 4450],
      // [ 1373867173544, 4890],
      // [ 1373826600000, 4760],
      [ 1376545582567, 4020],
      // [ 1376505000000, 4990],
      [ 1379223991223, 3712],
      // [ 1379183400000, 4120],
      [ 1381815999864, 3890],
      // [ 1381775400000, 3784],
      [ 1384494407119, 3400],
      // [ 1384453800000, 3210],
      [ 1387086415567, 2589],
      // [ 1387045800000, 2412],
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
