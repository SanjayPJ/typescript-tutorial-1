"use strict";
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
var Payment_js_1 = require("./classes/Payment.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
// Form
var form = document.querySelector(".new-item-form");
// Input values
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// Intializing list
var ul = document.querySelector("ul");
var list = new ListTemplate_js_1.ListTemplate(ul);
// When form submits
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    // Creating finance log object
    if (type.value === "invoice") {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // Rendering finance log to the list template
    list.render(doc, type.value, "start");
});
