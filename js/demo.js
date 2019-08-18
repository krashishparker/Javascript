 /*src="demo.js"*/ //paste this in default.html in script tag
 
 document.write("<h1>ashish kumar javasricpt</h1>");
 
  //yoyo bkl
  /*
  var type=true;

  document.writeln("<h1>"+type+"\t"+(num+34)+"</h1>");
  num="ashish";
document.writeln("<h1>"+type+"\t"+num+87+"</h1>");

var aq;
  for(aq=1;aq<10;aq++){
    var product=aq*2;
  document.write("<h2>"+product+"</h2>");
}
*/
  
  //add2number(12,45);



/*var num=16;
var output=add(145,52.025);
document.write("<h2>"+output+"</h2>");
function add(a,b){
  var c=98;
 
  var result=a+b;
    return result;
  }
  
function any(){
var c=90;//local variable
var1 ="rajnish";//local variables acts as a global variable
  document.write("<h2>"+c+"</h2>");
  document.write("<h2>"+(c+num)+"</h2>");
}
any();
document.write(var1);//var1 is global variable
var car=["ashish","manish","satish"];
car.push("rAjnish");

 for(aq=0;aq<car.length;aq++){
    
  document.write("\t"+car[aq]+"\t");
}*/

var car1={  //class car
car_brand:"tesla",
car_model:"model 1",
price: 500,

teslAutoPilot: function(){
document.write("<h2>this car have auto pilot</h2>");
}
}
document.write("<h2> ashish\t"+car1.car_brand+"</h2>");
car1.teslAutoPilot();


function car(car_brand,car_model,price){ //constructer function
this.car_brand=car_brand;
this.car_model=car_model;
this.price=price;
this.autopilot= function(){
  document.write("<h2>this car have autopiolt feature</h2>");
}
}
 
var c1=new car("tesla","model1",4522588);
c1.autopilot();
document.write("<h2>"+c1.car_brand+"<\h2>");
var c01=new car("auddi","model5",452255478);

car.fueltype="electric";//adding a property
document.write("<h2>"+car.fueltype+"</h2>");

delete c1.price;//deleting a property
document.write("<h2>"+c1.price+"</h2>");

var str=new String();//similary boolean,ineger,etc can be used as object

document.write("<h2>"+typeof(str)+"</h2>");

var str1="ashish";
document.write("<h2>"+typeof(str1)+"</h2>");














