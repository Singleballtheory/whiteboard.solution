console.log("Node".concat(" is server-side."));

function addPrefix(prefix) {
  return `${prefix} Scott`
}

const prefixSir = addPrefix("Sir");


function soundMaker(sound) {
  return `The animal went ${sound}`
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

console.log(lionSound);

function addPrefix(prefix) {
  return function(name) {
    return function(suffix) {
      return `${prefix} ${name} ${suffix}`
    }
  }
}

