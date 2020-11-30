
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", "https://stark-tundra-99254.herokuapp.com/api/books", true);
xhttp.send();



function CreateTable(data){
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

    for (let book in data) {
        retVal +=
            '<tr> \n' +
            '	<td>' + data[book]["name"] + '</td> \n' +
            '	<td>' + data[book]["author"] + '</td> \n' +
            '	<td>' + data[book]["isbn"] + '</td> \n' +
            '	<td>' + "$" + data[book]["price"] + '</td> \n' +
            '</tr> \n';
    }

    retVal +=
        '</tbody> \n' +
        '</table> \n' +
        '</div> \n ' ;
    return retVal;
}