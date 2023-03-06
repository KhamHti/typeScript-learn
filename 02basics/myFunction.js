"use strict";
exports.__esModule = true;
function addTwo(num) {
  return num + 2;
}
var q = addTwo(5);
console.log(q);
console.log(addTwo(1).valueOf);
function getUpper(val) {
  return val.toUpperCase();
}
console.log(getUpper("hello3"));
function signUpUser(name, email, isPaid) {}
signUpUser("kang", "kand@ae.com", true);
console.log(signUpUser("kand", "kann@gmail.com", true));
function loginUser(name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
}
var s = loginUser("gg", "abc@gmail.com");
console.log(s);
var getValue = function (val) {
  if (val > 5) {
    return true;
  } else {
    return "200 OK";
  }
};
var getHello = function (s) {
  return "";
};
var heros = ["spiderman", "batman", "ironman"];
// const heros = [1, 2, 3]
var hee = heros.map(function (hero) {
  return "Hero is ".concat(hero);
});
console.log(hee);
