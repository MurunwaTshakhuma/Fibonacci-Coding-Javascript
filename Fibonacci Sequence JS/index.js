function fibonacciGenerator (n) {

  var a=0;
  var b=1;
  var temp;
  var output=[];  
  if(n===1){
      output.push(a);
    } //Control statement for n=1 items.
    
  else if(n==2){
      output.push(a);
      output.push(b);
  }//Control statement for n=1 items.
    
  else 
    
    output.push(a);
    output.push(b);
    for(var i=2;i<n;i++){
      output.push(a+b);
      temp=b;
      b=a+b;
      a=temp;
    } //Control statement for more than 2 items in the sequence.
      
return console.log(output);
}

fibonacciGenerator(10);// Function call for 10 elements.
