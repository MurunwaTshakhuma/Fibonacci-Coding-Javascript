function fibonacciGenerator (n) {
  var output=[];  
  if(n===1){
      output.push(0);
    } //Control statement for n=1 items.
    
  else if(n==2){
      output.push(0);
      output.push(1);
  }//Control statement for n=1 items.
    
  else 
      output=[0,1];
    for(var i=2;i<n;i++){
      output.push(output[output.length-2]+output[output.length-1]);
    } //Control statement for more than 2 items in the sequence.
      
return console.log(output);
}

fibonacciGenerator(10);// Function call for 10 elements.
