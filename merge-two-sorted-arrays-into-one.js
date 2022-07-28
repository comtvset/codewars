function mergeArrays(arr1, arr2) {
    const uniАrr = [...new Set(arr1.concat(arr2))]; //Set object lets you store unique values of any type
                                                    //by means of .concat() united arr1 and arr2
    function compareNumbers(a, b) {                 //number sorting function
      return a - b;
    }
    return uniАrr.map((a) => a).sort(compareNumbers);
  }
mergeArrays([1,3,6,6,4,3,2], [4,5,8,14,65])