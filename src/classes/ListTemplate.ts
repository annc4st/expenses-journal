import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    private type: HTMLSelectElement;
    // to store a reference to the <select> element with the ID type. 

    constructor(private container: HTMLUListElement) {
        this.type = document.querySelector('#type') as HTMLSelectElement;
    }
   

    render(item: HasFormatter, heading: string, position: 'start' | 'end'){
       
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        // console.log("h4");


        

        // Set the color based on the heading
        if(this.type.value =='invoice'){
            console.log('Invoice'); // Debugging: Log if heading is 'Invoice'
            h4.style.color = '#036379';
        } else {
            console.log('Payment'); // Debugging: Log if heading is not 'Invoice'
            h4.style.color = '#ff5722';
        }

        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        li.append(p);

        if(position == 'start'){
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

        if(heading == 'invoice') {
            h4.style.color = '#036379';
        }
    }
}