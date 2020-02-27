const generate = (id,string) => {
    s = id.toString() + string;
    var arr = s.split('');         
    var n = arr.length;              
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = 45*n % (n-i + 15);       
      
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                
    return s + "ABC+";                        
  }
module.exports = generate;