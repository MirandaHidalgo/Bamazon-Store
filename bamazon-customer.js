var mysql = require("mysql");
var inquirer = ("inquirer");
var table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "bamazon_db",
    port: 3306
})
connection.connect();

var display = function() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log("----------------------------------------");
        console.log("         Welcome to Bamazon           ");
        console.log("---------------------------------------");
        console.log("");
        console.log("Find your product");
        console.log("");
    });
    var table = new table({
        head: ["Product ID", "Product Description", "Cost"],
        colWidths: [12, 50, 8],
        colAligns: ["center", "left", "right"],
        Style: {
            head: ["aqua"],
            compact: true
        }
    });
    for (var = i; i < res.lenght; i++){
        table.push ([res[i].id, res[i].products_name, res[i].price]);
    }
}