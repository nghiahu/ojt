let list = ["list item number 1","list item number 2","list item number 3"];
let html = "";
for (let i = 0; i < list.length; i++) {
  html += "<h1>" + "<li>" +  list[i] + "</li>" + "</h1>";
}
document.write(html)


           