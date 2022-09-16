const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, b: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }
// const objE = { a: 99, c: 99 }


const combine = (...rest) => rest.reduce( ( result, current ) => {
    for(let key in current){
        let value = current[key];

        if(result[key] === undefined){
          result[key] = value;
        }else{
          result[key] = result[key] + value;
        }
    }

    return result;
  }, {} );

combine(objA, objB, objC)


//VERSION 1
// function combine() {
//     let result = {};
//     for (let obj of arguments) {
//         for (let property in obj) {
//             if (property in result) {
//                 result[property] += obj[property];
//             } else {
//                 result[property] = obj[property];
//             }
//         }
//     }
//     return result;
// }


//VERSION 2
// function combine(){
//     let resultObj = {}
//     for(i = 0; i < arguments.length; i++) {
//       for(let key in arguments[i]) {
//         resultObj[key] = (resultObj[key] || 0) + (arguments[i][key] || 0)
//       }
//     }
//     return resultObj
//   }


//VERSION 3
// function combine () {
//     object = {};
//     for (let i = 0; i < arguments.length; i++) {
//         for (let key in arguments[i]) {
//             if (object[key] !== undefined) {
//                 object[key] = object[key] + arguments[i][key];
//             } else {
//                 object[key] = arguments[i][key];
//             }
//         }
//     }
//     return object;
// }


//VERSION 4+COMMENTS
// function combine(...params) {
//     // Получаю acc-промежуточный результат, item-элемент
//      return params.reduce((acc, item) => {

//        // Object.entries - преобразует в объект из ключ: значение в массив[ключ, значение]
//        // forEach - принимает в качестве элемента массив с [ключ, значение]
//        Object.entries(item).forEach(([key, value]) => {

//          // создаю конст для проверки пустой ли acc - если не объявлен то будт 0
//          // если объявлен то дальше пойдет acc[key]
//          const prev = acc[key] || 0;

//        //  присваиваю в промежуточный рез-тат т.е. массив acc с ключом acc значение value
//          acc[key] =  prev + value;
//        });
//        return acc;
//      }, {});
//    }