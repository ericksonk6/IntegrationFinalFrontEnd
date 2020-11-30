function addData() {
    document.getElementById("check").addEventListener("click", (event) => {
        let url = "https://stark-tundra-99254.herokuapp.com/api/books/"
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("output").innerHTML =
                    "<pre>" + this.responseText + "</pre>";
            }
        };
        // foo=bar&lorem=ipsum
        let newBook =
            "name=" + document.getElementById("name").value + "&" +
            "author=" + document.getElementById("author").value + "&" +
            "isbn=" + document.getElementById("isbn").value + "&" +
            "price=" + document.getElementById("price").value;
        xhttp.open('POST', url, true);
        // Just needed to place this line AFTER opening the object
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(newBook);
    });
}
// function check(){
//     let isbn = document.getElementById('isbn').value;
//     let name = document.getElementById('name').value;
//     let author = document.getElementById('author').value;
//     let price = document.getElementById('price').value;
//     const ISBN = require( 'isbn-validate' );
//
//
//     if (isbn === 'undefined'|| author === 'undefined' || price === 'undefined' || name === 'undefined') {
//         document.getElementById("output").innerHTML = "error: empty fields";
//         return false;
//     }
//     if(!ISBN.Validate(isbn)){
//         document.getElementById("output").innerHTML = "error: isbn invalid";
//         return false;
//     }
//     return true;
// }
// function addData() {
//     let isbn = document.getElementById('isbn').value;
//     let name = document.getElementById('name').value;
//     let author = document.getElementById('author').value;
//     let price = document.getElementById('price').value;
//
//     if(check()) {
//
//         let xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
//             }
//         };
//         xhttp.open("POST", "https://stark-tundra-99254.herokuapp.com/api/books/?name=" + name + "&author=" +
//             author + "&isbn=" + isbn + "&price=" + price, true);
//         xhttp.send();
//     }
//     else{
//         alert("error");
//     }
// }