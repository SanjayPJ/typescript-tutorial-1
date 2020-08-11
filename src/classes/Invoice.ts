import { HasFormatter } from "../Interfaces/HasFormatter.js";

// Invoice object (HasFormatter: Must contain format class)
export class Invoice implements HasFormatter {
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	// Renders the invoice item description
	format = () => {
		return `${this.client} is owed $${this.amount} for ${this.details}`;
	};
}
