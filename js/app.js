// from data.js
var tableData = data;

// YOUR CODE HERE!
UFO(tableData);
function UFO (parameter) {
var tbody = d3.select("tbody");

tbody.html("");
console.log(tableData);

parameter.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
};
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
	var inputCountry = d3.select("#country");
		var inputState = d3.select("#state");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var countryValue = inputCountry.property("value");
  var stateValue = inputState.property("value");
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => inputValue =="" || tableData.datetime === inputValue)
							.filter(tableData => countryValue =="" || tableData.country === countryValue)
							.filter(tableData => stateValue =="" || tableData.state === stateValue);


  console.log(filteredData);

  UFO(filteredData);

  });


