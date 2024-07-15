async function init() {

  const data = await d3.csv(
     "https://flunky.github.io/cars2017.csv");
  //console.log(data)

  const margin=50
  const height=200

  var xs = d3.scaleLog().domain([10, 150]).range([0, 200]).base(10);
  var ys = d3.scaleLog().domain([10, 150]).range([200, 0]).base(10);

  const xAxis = d3.axisBottom(xs)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  const yAxis = d3.axisLeft(ys)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  d3.select("svg")
      .attr("width",200)
      .attr("height",200)
    .append("g")
      .attr("transform","translate("+margin+","+margin+")")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    //   .attr("cx",function(d) { return xs[parseInt(d.AverageCityMPG)] } )
    //   .attr("cy",function(d) {return ys[parseInt(d.AverageHighwayMPG] ) } )
    //   .attr("r", function(d) { return 2 + parseInt(d.EngineCylinders)} )
    .attr("cx", d => xs(d["AverageCityMPG"]))
    .attr("cy", d => ys(d["AverageHighwayMPG"]))
    .attr("r", d => 2 + +d["EngineCylinders"]);

d3.select("svg").append("g")
   .attr("transform","translate("+margin+","+margin+")")
   .call(yAxis)
     
d3.select("svg").append("g")
   .attr("transform","translate("+margin+","+(height+margin)+")")
   .call(xAxis)
   
}