/*Return the length of the longest word in the provided sentence.
Your response should be a number.*/

function findLongestWordLength(str) {
    let major = 0;
    str.split(' ').filter(elem => {
      if (elem.length > major) major = elem.length;
    });
    return major
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");