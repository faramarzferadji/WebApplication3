var product = [];
function regesternow() {
    var FirstName = document.getElementById("fname").value;
    if (FirstName == "") {alert("The course Name can not be empty  please write a correct name!")}
    var lastName = document.getElementById("lname").value;
    if (lastName == "") { alert("The Teacher Name can not be empty  please write a correct name!")}
    var Address = document.getElementById("address").value;
    if (Address == "") { alert("The section Total of hours can not be empty  please write  total of hours!") }

    product.push({
        "fname": FirstName,
        "lname": lastName,
        "address": Address,

    });
    Clean();
    Replace();


}
function Clean() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
}
function Replace() {
    var table = document.getElementById("mise");
    table.innerHTML = "";
    for (var i = 0; i < product.length; i++) {
        var line = table.insertRow(-1); //add new row at the end
        var column1 = line.insertCell(0);
        var column2 = line.insertCell(1);
        var column3 = line.insertCell(2);
        var column4 = line.insertCell(3);
        var column5 = line.insertCell(4);

        column1.innerHTML = i + 1;
        column2.innerHTML = product[i].fname;
        column3.innerHTML = product[i].lname;
        column4.innerHTML = product[i].address;
        column5.innerHTML = "<button  class='btn btn-success' onclick='Selection(" + i + ")'>select</button>";

    }
}
function Selection(i) {//i hear conect to forloop!!
    document.getElementById("id").value = i;
    document.getElementById("fname").value = product[i].fname;
    document.getElementById("lname").value = product[i].lname;
    document.getElementById("address").value = product[i].address;

    document.getElementById("btnregester").style.display = "none";
    document.getElementById("btnsave").style.display = "inline-block";
    document.getElementById("btnremove").style.display = "inline-block";
    document.getElementById("btncancel").style.display = "inline-block";

}
function Remove() {
    var id = document.getElementById("id").value;
    product.splice(id, 1);
    Clean();
    Replace();
}
function Cancel() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("fname").focus();

    document.getElementById("btnregester").style.display = "inline-block";
    document.getElementById("btnsave").style.display = "none";
    document.getElementById("btnremove").style.display = "none";
    document.getElementById("btncancel").style.display = "none";
}


function SaveChange() {
    var id = document.getElementById("id").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    product[id] = {
        "fname":fname,
        "lname": lname,
        "address": address
    };
    Clean();
    Replace();
}