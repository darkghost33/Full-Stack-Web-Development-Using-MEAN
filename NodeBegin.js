// // // console.log("Hello Welcome To NODE JS");
// // a = 10;
// // b = 20;
// // //console.log(a+b);
// // console.log("Sum of " + a + " and " + b + " is= " + (a+b))

// for(i=0; i<5; i++)
// {
//     console.log(i)
// }

// console.log(" ")

// i=5
// while(i!=0)
// {
//     console.log(i)
//     i--
// }

// console.log(" ")

// i=5
// do
// {
//     console.log(i)
//     i--
// }while(i!=0)

// console.log(" ")

// if(i==0)
//     console.log("IF Block")
// else
//     console.log("Else Block")    


// arr = ["Pen","Pencil","Book","Scale"]
// console.log(arr[2])
// console.log("Aray elements are: -")
// for(i=0; i<4; i++)
// {
//     console.log(arr[i])
// }

// student = {"Name":"ABC","Rollno":3001}
// console.log(" ")
// console.log(student)
// console.log(" ")
// console.log(student.Name)
// console.log(student.Rollno)
// console.log(" ")



// studentobject = [
//     {"Name":"ABC","Rollno":3001},
//     {"Name":"LMN","Rollno":3002},
//     {"Name":"XYZ","Rollno":3003}
// ]
// console.log(" ")
// console.log(studentobject[0])
// console.log(" ")
// console.log(studentobject[1].Rollno)

// ex = require("http")


//ANONYMOUS FUNCTIONS ----
//==================================================
var fun = function(){
    console.log("Message Function");
}

var fun1 =function(a,b)
{
    c = a+b;
    console.log("Sum is " + c);
}

fun();
fun1(2,5);
//===================================================



//ARROW FUNCTION--------
//===================================================
var fun = ()=>
{
    console.log("Message arrow function")
}

var fun1= (a,b,c)=>
{
    s = a+b+c
    console.log("Sum is = "+s)
}

fun();
fun1(4,2,5);
//======================================================

//Create 4 arrow functions which accepts 2 arguemnet and perform add,sub,mul,divide
console.log("")
var add = (a,b)=>
{
    console.log("Addition is = "+a+b)
}
var sub = (a,b)=>
{
    console.log("Difference is = "+(a-b))
}
var mul = (a,b)=>
{
    console.log("Multiplication is = "+a*b)
}
var div = (a,b)=>
{
    console.log("Division is = "+(a/b))
}

add(2,3); sub(5,4); mul(5,7); div(24,8);

//=========================================================
console.log("")
//Server using node

var http = require("http") //Create object of http module
http.createServer(          //Create server with request response
    function(req,res)
    {
        res.write("Output of my server in Node")  //Write method to show response in browser
        res.end();      //To stop the write method
    }
).listen(8080)      //8080 is the port no. on which the server is running