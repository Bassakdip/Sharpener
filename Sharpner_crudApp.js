//crud- creat,read,update,delete

//Global variabeles
var row = null;
function Submit() {
    var dataEntered = Data();
    var readData = dataFromLocalStorage(dataEntered);
    if(row == null){
        insert(readData);
        msg.innerHTML="Data insert";
    }
    else{
        update();
        msg.innerHTML="Data Update";
    }
    
}

//Creat data from form
function Data() {
    var Expencesamount = document.getElementById("amount").value;
    var Description = document.getElementById("description").value;
    var catagory = document.getElementById("catagory").value;

    var arr = [Expencesamount, Description, catagory]
    return arr;
}

//Data in local Storage
function dataFromLocalStorage(dataEntered) {
    var e = localStorage.setItem("amount", dataEntered[0]);
    var d = localStorage.setItem("description", dataEntered[1]);
    var c = localStorage.setItem("catagory", dataEntered[2]);

    //getting values from local to tabel

    var e1 = localStorage.getItem("amount", e);
    var d1 = localStorage.getItem("description", d);
    var c1 = localStorage.getItem("catagory", c);

    var arr = [e1, d1, c1]
    return arr;
}

//insert
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = "<button onclick = edit(this)>Edit</button><button onclick = remove(this)>Delete</button>"
}
//edit
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("amount").value = row.Cells[0].innerHTML;
    document.getElementById("description").value = row.Cells[1].innerHTML;
    document.getElementById("catagory").value = row.Cells[2].innerHTML;
}
//update
function update() {
    row.Cells[0].innerHTML = document.getElementById("amount").value;
    row.Cells[1].innerHTML = document.getElementById("description").value;
    row.Cells[2].innerHTML = document.getElementById("catagory").value;

    row = null;
}
//delete
function remove(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex)
}