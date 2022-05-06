let input = document.createElement("input")
input.placeholder= "Name";
input.style.color="black";
input.style.margin= "20px";
input.style.padding= "10px";
input.style.width="450px";
input.style.height = "30px";
input.style.borderRadius = "20px"

// input.style.border="pink"
input.style.backgroundColor = "pink";

let input1 = document.createElement("input")
let input2 = document.createElement("input")
let button = document.createElement("button")

button.innerText = "Submit";
button.style.width = "450px"
button.style.height = "50px"
button.style.backgroundColor = "purple";
button.style.color = "#fff";
button.style.margin = "10px";
button.style.borderRadius = "20px"


input1.placeholder= "Surname";
input1.style.color="black";
input1.style.padding= "10px";
input1.style.margin= "10px 0";
input1.style.width="450px";
input1.style.backgroundColor = "pink";
input1.style.height = "30px";
input1.style.borderRadius = "20px"


input2.placeholder= "Password";
input2.style.color="black";
input2.style.padding= "10px";
input2.style.margin= "10px 0";
input2.style.width="450px";
input2.style.backgroundColor = "pink";
input2.style.height = "30px";
input2.style.borderRadius = "20px"

document.body.style.display = 'flex';
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "gray";

let List = `
<ul style="color:pink; line-height:40px ; margin:70px">
    <li> Adil Valizade </li>
    <li> Eljan Rustamov </li>
    <li> Roza Abdullayeva </li>
    <li> Aysel Mirza </li>
    <li> Farid Guluzade </li>
</ul>
`
let userList = document.createElement("ul")

let user = document.createElement("li")



document.body.appendChild(input);
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);
document.body.innerHTML += List;