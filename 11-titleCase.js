/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(elem => elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase()))
    .join(' ');
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");