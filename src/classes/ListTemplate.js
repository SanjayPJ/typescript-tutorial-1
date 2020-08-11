"use strict";
exports.__esModule = true;
exports.ListTemplate = void 0;
// Its the list render class
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    // it render an item on the list
    ListTemplate.prototype.render = function (item, heading, pos) {
        // item
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        // first or last on the list
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
exports.ListTemplate = ListTemplate;
