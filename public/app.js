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
    console.log('Type value:', type.value);
    // tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// generates random id for the object
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {uid, ...obj};
// }
// let docOne = addUID({name: "anna", age: 45});
// console.log(docOne.age);
//  GENERICS with interfaces
// interface Resource<T>{
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// Enums
// enum ResourceType {BOOK, SUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docFive: Resource<object> = {
//     uid: 1, 
//     resourceType: ResourceType.BOOK, 
//     data: {title: 'name of the book'}
// }
// const docSix: Resource<object> = {
//     uid: 2, 
//     resourceType: ResourceType.PERSON,
//     data: {name: 'Andre'}
// }
// console.log(docSix);
// tuples
// let tup: [string, number , boolean] = ["strinVar", 45, true];
// let student: [string, number];
// student = ["Arthur", 16544];
