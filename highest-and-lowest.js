function highAndLow(num){
    let a = num.replace(/ /ig, ',').split(',');

    for (let i = 0; i < a.length; i++) {
      a[i] = parseInt(a[i]);
    }

      function findMin(array) {
          let min = array.length ? array[0] : 0;
          for (let i = 0; i < array.length; i++) {
              if (array[i] < min) {
                min = array[i];
              }
          }
          return min;
      }

      function findMax(array) {
        let max = array.length ? array[0] : 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
              max = array[i];
            }
        }
        return max;
    }

    let min = findMin(a);
    let max = findMax(a);
    let result = String((max+" "+min))
    console.log(result);

  }

  highAndLow("1 2 -3 4 5")

  //----short version----
  //
  // function highAndLow(numbers){
  //   numbers = numbers.split(' ').map(Number);
  //   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  // }

  // highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")