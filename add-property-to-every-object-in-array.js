let entries = Object.entries(questions);

if (entries.length>1) {
    for (let i = 0; i < entries.length; i++) {
       
        Object.defineProperty(questions[i], 'usersAnswer', {
            value: null,
            enumerable: true
        })
      }
    }

//Alternative version:

// 1)
// for (i=0; i<questions.length; i++) {
//     questions[i].usersAnswer = null;
//     };

// 2)
// questions.forEach(function (i) {
//     i.usersAnswer = null;
//     });