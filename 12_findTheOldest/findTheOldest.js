const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
      let age = getAge(person.yearOfBirth, person.yearOfDeath);
      let oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        if (age > oldAge) {
          oldest = person;
        };
        return oldest;
    });
  };

  function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    };
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
