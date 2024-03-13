function addItem() {
    let inp = document.getElementById("inp").value;
    if (inp.trim() !== "") {
        let list = document.createElement("li");
        list.appendChild(document.createTextNode(inp));
        document.getElementById("List").appendChild(list);
        document.getElementById("inp").value = "";
    }
}
