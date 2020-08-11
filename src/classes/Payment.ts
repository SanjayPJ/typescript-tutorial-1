import { HasFormatter } from "../Interfaces/HasFormatter.js";

// Payment object (HasFormatter: Must contain format class)
export class Payment implements HasFormatter {
	constructor(
		readonly reciept: string,
		private details: string,
		public amount: number
	) {}

	// Renders the payment item description
	format = () => {
		return `${this.reciept} is owed $${this.amount} for ${this.details}`;
	};
}
