
// GLOBAL VARIABLE
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function findMatching(drivers, string) {
    return drivers.filter(function(driverName) {
        return driverName.toLowerCase() === string.toLowerCase()
    });
};
function fuzzyMatch(drivers, string) {
let lengthOfName = string.length
    return drivers.filter(function(element, index, array) {
        return element.slice(0, lengthOfName) === string;
    });
};
function matchName(drivers2, string) {
    return drivers2.filter(function(element, index, array) {
        return element.name.toLowerCase() === string.toLowerCase();
    });
};