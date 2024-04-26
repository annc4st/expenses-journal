// classes
import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs in the form
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list template instance

const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value ==='invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end'); // 'end' -> pushes to end of list
})


// GENERICS
// generates random id for the object
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {uid, ...obj};
}

let docOne = addUID({name: "anna", age: 45});
console.log(docOne.age);

//  GENERICS with interfaces
// interface Resource<T>{
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// Enums
enum ResourceType {BOOK, SUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docFive: Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK, 
    data: {title: 'name of the book'}
}

const docSix: Resource<object> = {
    uid: 2, 
    resourceType: ResourceType.PERSON,
    data: {name: 'Andre'}
}

console.log(docSix);

// tuples
let tup: [string, number , boolean] = ["strinVar", 45, true];
let student: [string, number];
student = ["Arthur", 16544];

