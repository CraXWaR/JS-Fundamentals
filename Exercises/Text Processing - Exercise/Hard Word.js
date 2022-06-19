function hardWords(array) {
    let sentense = array[0].split(` `);
    let words = array[1];
    for (const iterator of words) {
      for (let i = 0; i < sentense.length; i++) {
        if (sentense[i].includes(`_`)) {
          if (sentense[i].endsWith(`_`) === false) {
            let word = sentense[i].substring(0, sentense[i].length - 1);
            let mark = sentense[i].substring(sentense[i].length - 1);
            if (iterator.length == word.length) {
              sentense[i] = iterator + mark;
            }
          } else if (iterator.length == sentense[i].length) {
            sentense[i] = iterator;
          }
        }
      }
    }
    console.log(sentense.join(` `));
  }
  hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);