// Its the list render class
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // it render an item on the list
    render(item, heading, pos) {
        // item
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        // first or last on the list
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
