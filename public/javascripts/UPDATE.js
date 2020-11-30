function findISBN() {

    if (document.getElementById('isbn').value === "" || document.getElementById('isbn').value.length === 0) {
        alert("ERROR: empty request");
        return;
    }

    let isbn = document.getElementById('isbn').value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = CreateTableIsbn(JSON.parse(this.responseText));
        }
        if ( this.status == 404 || this.status == 500 ){
            document.getElementById("output").innerHTML = "<pre>" + this.responseText + "</pre>";
            return;
        }
    };
    xhttp.open("GET", "https://stark-tundra-99254.herokuapp.com/api/books/" + isbn, true);
    xhttp.send();
}

function CreateTableIsbn(data){
    let retVal = "";
    retVal =
        '<table class="table table-bordered table-hover"> \n' +
        '	<thead> \n' +
        '		<tr> \n' +
        '			<th scope="col">Title</th> \n' +
        '			<th scope="col">Author</th> \n' +
        '			<th scope="col">isbn</th> \n' +
        '			<th scope="col">Price</th> \n' +
        '		</tr> \n' +
        '	</thead> \n' +
        '	<tbody> \n';

    // for (let book in data){
    retVal +=
        '<tr> \n' +
        '	<td>' + data["name"] + '</td> \n' +
        '	<td>' + data["author"] + '</td> \n' +
        '	<td>' + data["isbn"] + '</td> \n' +
        '	<td>' + "$" + data["price"] + '</td> \n' +
        '</tr> \n';
    // }

    retVal +=
        '</tbody> \n' +
        '</table> \n' +
        '</div> \n ' ;
    return retVal;
}