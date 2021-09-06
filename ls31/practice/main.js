const dashbord = document.querySelector('#root');

class Notes{
    constructor(data = "", x = 0, y = 0)
    {
        this.top = x;
        this.left = y;
        this.data = data;
    }

    build()
    {
        const block = document.createElement("div");
        block.classList.add("list");
        const node = document.createTextNode(this.data);
        block.appendChild(node);
        block.style.top = this.top + "px";
        block.style.left = this.left + "px";
        dashbord.appendChild(block)
    }
}

n1 = new Notes("1232", 100, 100);
n1.build();

n2 = new Notes("123asdahhdhs", 400, 100);
n2.build();


