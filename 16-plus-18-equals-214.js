function add(num1, num2) {

// for example:
//              let num1 = 122;
//              let num2 = 81;
  
    let result = []; //empty array
    num1 = String(num1).split('').reverse(); // ['2','2','1'] //split, reverse array and convert to String
    num2 = String(num2).split('').reverse(); // ['1','8']
    
    let length;
      
      if (num1.length >= num2.length) { //choose the maximum length
        length = num1.length;
      } else {
        length = num2.length; 
      }

      for (let i = 0; i < length; i++) {
        let a = num1[i] === undefined ? 0 : num1[i]; //num1[i] === 0 (if result undefined), else num1[i]
        let b = num2[i] === undefined ? 0 : num2[i]; //num2[i] === 0 (if result undefined), else num2[i]
        result.push(Number(a) + Number(b)); //add sum (a and b) to the end of an array
      }
    
     return Number(result.reverse().join('')); //reverse, unite array and convert to Number
    }