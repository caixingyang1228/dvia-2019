budgetValues = [];
budgetValues1 = [];

function preload() {
  table = loadTable("us.csv", "csv", "header");
  // table1 == loadTable("russia.csv", "csv", "header");
}

function setup() {
  createCanvas(1900, 500);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
}

function draw() {
  background(220);
  fill(0);

  for (var i = 0; i < numberOfRows; i++) {
    //place years
    text(table.getString(i, 0), i * 30 + 60, 420);
    //pull numbers
    budgetValues[i] = table.getString(i, 3);
    // budgetValues1[i] = table1.getString(i, 3);
    //draw graph
    rect(i * 30 + 60, 400 - budgetValues[i]*5, 20, budgetValues[i]*5)
    // rect(i * 30 + 60, 400 - budgetValues1[i]*5, 20, 400 - budgetValues1[i]*5)
   }
   
  //   for (var n = 0; n < numberOfRows1; n++) {
  //   //place years
  //   text(table.getString(n, 0), n * 30 + 60, 420);
  //   //pull numbers
  //   budgetValues[n] = table1.getString(n, 3);
  //   //draw graph
  //   rect(n * 30 + 60, 400 - budgetValues[n]*5, 20, budgetValues[n]*5)
  // }
  
   //determine highest value
   maxValue=max(budgetValues);
  for (var k=0;k<maxValue;k=k+50){
    // text(k,10,420-k);
  }

}