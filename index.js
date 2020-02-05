
var jsonToCsv = require('convert-json-to-csv');
var csvjson = require('csvjson')
var stringify = require('csv-stringify');

var fs = require('fs')

 console.log("===========================================");
 console.log("Welcome to my Contact Management System");
 console.log("===========================================");
 console.log("you have passed the param: ");
 var read_file = fs.readFile('./sample.csv','utf8', function (err,data) 
 {
  const jsonObj = csvjson.toObject(data);

  
  var newarray=[];
  newarray=jsonObj;
 
console.log(process.argv[2]);
 let param = process.argv[2];

 switch (param) 

 {
  
   case  "displayAll":
     // code block
    console.log(jsonObj);
   break;
   case "display":
     // code block
     var result = newarray.filter(x=>x.name==process.argv[3]);
     console.log(result);
    
     break;
     case "add":
     
     var newemployee = {name:process.argv[3], address: process.argv[4],phno:process.argv[5]};
      newarray.push(newemployee);
      console.log('added employee is',newemployee);
     break;
  case "update":
     
    var result = newarray.find(x=>x.name==process.argv[3]);
     var index = newarray.findIndex(x=>x.name==process.argv[3]);
     newarray.splice(index,1);
     result.name= process.argv[4];
     result.address=process.argv[5];
     result.phone=process.argv[6]
     newarray.push(result);
     console.log('updated employee is',result);
     break;

     case "delete":
    
     var result = newarray.findIndex(x=>x.name==process.argv[3]);
   
     newarray.splice(result,1);

     console.log('delete result is',result);
  break;

  }  

  stringify(newarray, function(err,data) {
    fs.writeFile('sample.csv', 'name,address,phone\n'+data, 'utf8',function(err) {
      if (err)
       {
        console.log('Some error occured - file either not saved or corrupted file saved.');
      } else {
        console.log('It\'s saved!');
      }
    });
  });




  

  });

