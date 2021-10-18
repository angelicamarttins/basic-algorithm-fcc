/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
    let result = "";
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        result += str;
      }
    }
  return result;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);