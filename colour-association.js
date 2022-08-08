function colourAssociation(arr){
  let arr2 = []; 
   
    for (let i = 0; i < arr.length; i++) { 
      let obj = new Object();
      obj[arr[i][0]]=arr[i][1];
          arr2.push(obj); 
        } 
      return(arr2)
  }