var fs = require('fs'); 
var parse = require('csv-parse');
var headerPart = new Array();
var linePart = new Array();

var csvData=[];

/*fs.readFile('SalesJan2009.csv', (err, data) => {
	csvcols = data.split('/\r?\n/');
	console.log(csvcols[0]);
});*/
fs.createReadStream('SalesJan2009.csv')
    
    .pipe(parse({delimiter: '/\r?\n/'}))
    .on('data', function(csvrow) {
    for (var i = 0; i < csvrow.length; i++) {
    	for (var j = 0; j < 12; j++) {
    		csvData[j]=csvrow[i].split(',')
    	}
    	
    }
    console.log(csvData[00]);
/*
        for (var i = 0; i < csvrow.length; i++) {
        	if(i === 0){
        		var tempHeaderPart = csvrow[i].split(",");
        		for (var j = 0; j < tempHeaderPart.length; j++) {
        			if(tempHeaderPart[j]!=""){
        				headerPart[j] = tempHeaderPart[j];
        			} 
        		}
        	}
        	else if(i > 0){
        		var tempLinePart = csvrow[i].split(",");
        		for (var j = 0; j < tempLinePart.length; j++) {
        			if(tempLinePart[j]!=""){
        				linePart[j]=tempLinePart[j];
        			}
        		}
        	}
        }
*/
    });
    
    /*.on('end',function() {
      //do something wiht csvData
      //console.log(csvData);
    });*/