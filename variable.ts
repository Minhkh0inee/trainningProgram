let myName: string | boolean = false;
myName = "Khoi";

//array
let item = ["Khoi", 2];

//object
const account: {
  name: string;
  balance: number;
  status?: string;
} = {
  name: "Khoi",
  balance: 10,
};

//multiple object

let accounts: {
  name: string;
  age: number;
  status?: boolean;
}[] = [
  {
    name: "Khoi",
    age: 20,
    status: true,
  },
  { name: "Thy", age: 17 },
];

//interface
interface IAccount {
  name: string;
  age: number;
  status?: string;
  deposit?: () => void;
}

const Iaccount: IAccount = {
  name: "Khoi",
  age: 10,
};

let Iaccounts: IAccount[] = [
  {
    name: "Khoi",
    age: 20,
  },
  { name: "Thy", 
    age: 17 },
];


//class
class InvestmentAccount implements IAccount{
    constructor(public name, public age
        ){

    }

    private withdraw(){

    }
}
