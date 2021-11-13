function addPrefix(prefix) {
  return `${prefix} Scott`
}

const prefixSir = addPrefix("Sir");

---

function soundMaker(sound) {
  return `The animal went ${sound}`
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

---

function addPrefix(prefix) {
  return function(name) {
    return function(suffix) {
      return `${prefix} ${name} ${suffix}`
    }
  }
}

const newName = prefixSir("Esquire");
const misterJunior = addPrefix("Mister")("Junior");
const newName2 = prefixMaam("words");

---

function addSuffix(suffix) {
  return function(name) {
    return function(prefix) {
      return `${prefix} ${name} ${suffix}`
    }
  }
}

const suffixSave = addSuffix("Mr")("Scott");