import { Cell } from "./Cell";

export class Row {
    private elem: HTMLSpanElement;
    private cells: Cell[] = [];
    constructor(width: number) {
        this.elem = document.createElement("span");
        this.elem.className = "nvim_row";
        for (let i = 0; i <= width; ++i) {
            this.cells.push(new Cell());
            this.cells[this.cells.length - 1].attach(this.elem);
        }
    }

    public clear() {
        this.cells.forEach(c => c.clear());
    }

    public attach(e: HTMLElement) {
        e.appendChild(this.elem);
    }

    public detach() {
        this.elem.parentNode.removeChild(this.elem);
    }

    public get(n: number) {
        if (n >= 0 && n < this.cells.length) {
            return this.cells[n];
        }
        throw new Error(`Accessing non-exisiting property ${n} of row.`);
    }

    public set(n: number, v: string) {
        this.cells[n].value = v;
    }
}