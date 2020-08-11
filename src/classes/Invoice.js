"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
// Invoice object (HasFormatter: Must contain format class)
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        var _this = this;
        this.client = client;
        this.details = details;
        this.amount = amount;
        // Renders the invoice item description
        this.format = function () {
            return _this.client + " is owed $" + _this.amount + " for " + _this.details;
        };
    }
    return Invoice;
}());
exports.Invoice = Invoice;
