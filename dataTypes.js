var isDone = true;
var decVar = 23;
var myname = "Rajat Goel";
var fullname = " Hey, I'm  " + myname + " . \nand i'm " + (decVar + 2);
var arr = [1, 2, 3, 4];
var newarr = [1, 2, 3, 4];
var varTuple = ["Rajat", 10];
var colorSet;
(function (colorSet) {
    colorSet[colorSet["Red"] = 4] = "Red";
    colorSet[colorSet["Yellow"] = 5] = "Yellow";
    colorSet[colorSet["Green"] = 6] = "Green";
})(colorSet || (colorSet = {}));
;
var color = colorSet.Green;
var colorname = colorSet[colorSet.Green];
function username() {
    console.log("username method triggered");
}
console.log("isDone", isDone);
console.log("decVar", decVar);
console.log("myname", myname, "and fullName is \n\n", fullname);
console.log("arr", arr, "\n\n newarr", newarr);
console.log("Tuple is ", varTuple);
console.log("color is", color);
console.log("colorname is", colorname);
username();
