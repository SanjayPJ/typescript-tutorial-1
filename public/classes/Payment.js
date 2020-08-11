// Payment object (HasFormatter: Must contain format class)
export class Payment {
    constructor(reciept, details, amount) {
        this.reciept = reciept;
        this.details = details;
        this.amount = amount;
        // Renders the payment item description
        this.format = () => {
            return `${this.reciept} is owed $${this.amount} for ${this.details}`;
        };
    }
}
