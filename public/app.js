import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// Form
const form = document.querySelector(".new-item-form");
// Input values
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Intializing list
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// When form submits
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    // Creating finance log object
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // Rendering finance log to the list template
    list.render(doc, type.value, "start");
});
