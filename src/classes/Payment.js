"use strict";
exports.__esModule = true;
exports.Payment = void 0;
// Payment object (HasFormatter: Must contain format class)
var Payment = /** @class */ (function () {
    function Payment(reciept, details, amount) {
        var _this = this;
        this.reciept = reciept;
        this.details = details;
        this.amount = amount;
        // Renders the payment item description
        this.format = function () {
            return _this.reciept + " is owed $" + _this.amount + " for " + _this.details;
        };
    }
    return Payment;
}());
exports.Payment = Payment;
