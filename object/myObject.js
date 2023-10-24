"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tester = {
    name: "kham",
    email: "kham@kham.com",
    isError: false,
    age: 25,
};
function createTester(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createTester({ name: 'thu thu', isPaid: true });
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
var createToken = function () {
    return { name: 'guestAuth', id: 123123123, age: 30 };
};
function createUser(user) {
    return { name: '', age: 12, isActive: false };
}
createUser({ name: '', age: 15, isActive: true });

