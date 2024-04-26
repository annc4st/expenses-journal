// classes
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// inputs in the form
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end'); // 'end' -> pushes to end of list
});
// GENERICS
// generates random id for the object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign({ uid }, obj);
};
let docOne = addUID({ name: "anna", age: 45 });
console.log(docOne.age);
//  GENERICS with interfaces
// interface Resource<T>{
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["SUTHOR"] = 1] = "SUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the book' }
};
const docSix = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'Andre' }
};
console.log(docSix);
// tuples
let tup = ["strinVar", 45, true];
let student;
student = ["Arthur", 16544];
