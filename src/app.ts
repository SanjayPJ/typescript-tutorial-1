import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// Form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Input values
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Intializing list
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// When form submits
form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let values: [string, string, number] = [
		tofrom.value,
		details.value,
		amount.valueAsNumber,
	];

	let doc: HasFormatter;

	// Creating finance log object
	if (type.value === "invoice") {
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}

	// Rendering finance log to the list template
	list.render(doc, type.value, "start");
});
