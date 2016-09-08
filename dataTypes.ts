let isDone:boolean=true;
let decVar:number=23;
let myname:string = `Rajat Goel`;
let fullname:string=` Hey, I'm  ${myname} . 
and i'm ${decVar+2}`;
let arr:number[]=[1,2,3,4];
let newarr:Array<number>=[1,2,3,4];

let varTuple:[string,number] = ["Rajat" , 10]
enum colorSet {Red  =4  , Yellow , Green };

let color:colorSet = colorSet.Green ; 
let colorname:string = colorSet[colorSet.Green];

let myfullname:any = "Raj";

let nameLength:number = (fullname as string).length;

function username():void {
	console.log("username method triggered");	
}


console.log("isDone" , isDone) ; 

console.log("decVar" , decVar) ; 

console.log("myname" , myname , "and fullName is \n\n" , fullname) ; 

console.log("arr" , arr , "\n\n newarr" , newarr) ; 


console.log("Tuple is " , varTuple);

console.log("color is" , color);

console.log("colorname is" , colorname);
username();
console.log("fullname is" , myfullname , "and name length is " ,nameLength);
