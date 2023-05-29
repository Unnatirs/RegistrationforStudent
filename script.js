var selectedRow = null;
function onformSubmit(){
    event.preventDefault();
    var formData = readForData();
    if(selectedRow === null){
        insertRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readForData(){
    var formData = {};
    formData["studentRoll"] = document.getElementById("studentRoll").value;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["studentAge"] = document.getElementById("studentAge").value;
    formData["studentMarks"] = document.getElementById("studentMarks").value;
    return formData;
}
//insert record
function insertRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.studentRoll;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.studentName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.studentAge;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.studentMarks;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>';    
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentRoll').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('studentAge').value = selectedRow.cells[2].innerHTML;
    document.getElementById('studentMarks').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.studentRoll;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.studentAge;
    selectedRow.cells[3].innerHTML = formData.studentMarks;
}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById('stuentRoll').value = '';
    document.getElementById('stuentName').value = '';
    document.getElementById('stuentAge').value = '';
    document.getElementById('stuentMarks').value = '';
}