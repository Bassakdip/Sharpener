var row = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readData();
    if(row === null)
    {
        insertNewData(formData);
    }
    else{
        updateData(formData)
    }
    resetForm();
}

//retrive the data
function readData(){
    var formData = {};
    formData["ExpenseAmount"] = document.getElementById("ExpenseAmount").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["Category"] = document.getElementById("Category").value;
    
    return formData;
}

//Insert the Data
function insertNewData(data){
    var table = document.getElementById("listData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ExpenseAmount;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Description;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Category;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>`
}
//edit
function onEdit(td){
    row=td.parentElement.parentElement;
    document.getElementById('ExpenseAmount').value = row.cells[0].innerHTML;
    document.getElementById('Description').value = row.cells[1].innerHTML;
    document.getElementById('Category').value = row.cells[2].innerHTML;

}
function updateData(formData){
    row.cells[0].innerHTML=formData.ExpenseAmount;
    row.cells[1].innerHTML=formData.Description;
    row.cells[2].innerHTML=formData.Category;

}
// delete
function onDelete(td){
    if(confirm("Do you want to delete?")){
        row=td.parentElement.parentElement;
        document.getElementById('listData').deleteRow(row.rowIndex);
    }
    resetForm()
}
//Reset the data
function resetForm(){
    document.getElementById('ExpenseAmount').value = " ";
    document.getElementById('Description').value = " ";
    document.getElementById('Category').value = " ";
}
