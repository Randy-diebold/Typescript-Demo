"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var greeting = 'Hello World';
var count;
var isdone;
var username;
var temp;
var numArr = [];
numArr.push(1);
var user;
user = [10, 'Randy', true];
var userData = [
    [1, 'Reid', false],
    [2, 'Matt', false],
];
userData.push(user);
var userId;
userId = 2;
userId = '2';
var UsersIds;
(function (UsersIds) {
    UsersIds[UsersIds["Reid"] = 10] = "Reid";
    UsersIds[UsersIds["Matt"] = 11] = "Matt";
    UsersIds[UsersIds["Randy"] = 12] = "Randy";
})(UsersIds || (UsersIds = {}));
var UsersNames;
(function (UsersNames) {
    UsersNames["Reid"] = "Reid";
    UsersNames["Matt"] = "Matt";
    UsersNames["Randy"] = "Randy";
})(UsersNames || (UsersNames = {}));
var user1 = {
    id: 1,
    name: 'Reid',
};
var user2 = {
    id: 2,
    name: 'Matt',
};
var uid;
uid = 1;
var userIdNum = uid;
uid = '1';
var userIdStr = uid;
function addtwo(x) {
    return x + 2;
}
function greetUser(user) {
    console.log('Hello ' + user.name);
}
var user3 = {
    id: 3,
    name: 'Randy',
};
var add = function (x, y) {
    return x + y;
};
var mulitply = function (x, y) {
    return x * y;
};
console.log('5 + 4 = ' + add(5, 4));
console.log('5 x 4 = ' + mulitply(5, 4));
var CSUser = (function () {
    function CSUser(id, name) {
        this.id = id;
        this.name = name;
    }
    CSUser.prototype.greet = function () {
        return 'Hello ' + this.name;
    };
    return CSUser;
}());
var randy = new CSUser(10, 'Randy');
console.log(randy.greet());
var CSstaff = (function (_super) {
    __extends(CSstaff, _super);
    function CSstaff(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return CSstaff;
}(CSUser));
var reid = new CSstaff(1, 'Reid', 'Instructor');
console.log(reid.greet());
