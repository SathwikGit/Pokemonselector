let count = 0;
let type = "NONE";
function takeinput() {
  document.body
    .querySelector(".container")
    .querySelector(".display").innerHTML = "";
  count = document.body.querySelector(".pkcount").value;
  type = document.body.querySelector(".pktype").value;

  const el = document.createElement("div");
  el.innerHTML = `<b>${type}</b>` + "<b> POKEMONs: </b>" + `${count}`;
  document.body
    .querySelector(".container")
    .querySelector(".display")
    .appendChild(el);

  console.log(type);
  console.log(count);
}
