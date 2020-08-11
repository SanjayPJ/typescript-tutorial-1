// Invoice object (HasFormatter: Must contain format class)
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // Renders the invoice item description
        this.format = () => {
            return `${this.client} is owed $${this.amount} for ${this.details}`;
        };
    }
}
