
function buildTable(data) {
  var table = document.createElement("table");

  var fields = Object.keys(data[0]);
  var headRow = document.createElement("tr");
  fields.forEach(function(field) {
    var headCell = document.createElement("th");
    headCell.textContent = field;
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);

  data.forEach(function(object) {
    var row = document.createElement("tr");
    fields.forEach(function(field) {
      var cell = document.createElement("td");
      cell.textContent = object[field];
      if (typeof object[field] == "number")
        cell.style.textAlign = "right";
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

document.body.appendChild( buildTable(MOUNTAINS) );
