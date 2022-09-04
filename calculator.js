const express = require("express");
const bodyParser = require("body-parser"); // Camel Casing  
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    // res.send("Hello! World") ;
    res.sendFile(__dirname + "/index.html");
});

// Here the __dirname - variable will give you the file path of actually where the directory is. 
// Using console.log(__dirname) will print the address of the directory i.e. where is our file is stored. 


app.post("/", function (req, res) {
    // console.log(req.body.num1) ;
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    // num1 = Number.parseInt(num1) ; 
    // num2 = Number.parseInt(num2) ; 
    var result = n1 + n2;
    res.send("The Result of the calculation is " + result + "." + " Thanks for using Calculator.");

})

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {
    var weight = Number(req.body.weight) ; 
    var height = Number(req.body.height) ; 

    var result = weight/ (height*height) ; 
    res.send("Your BMI is " + result + ".") ; 
})
app.listen(3000, function () {
    console.log("Server is Connected to Port 3000")
}); 