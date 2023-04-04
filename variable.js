var myName = false;
myName = "Khoi";
//array
var item = ["Khoi", 2];
//object
var account = {
    name: "Khoi",
    balance: 10,
};
//multiple object
var accounts = [
    {
        name: "Khoi",
        age: 20,
        status: true,
    },
    { name: "Thy", age: 17 },
];
var Iaccount = {
    name: "Khoi",
    age: 10,
};
var Iaccounts = [
    {
        name: "Khoi",
        age: 20,
    },
    { name: "Thy",
        age: 17 },
];
//class
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
