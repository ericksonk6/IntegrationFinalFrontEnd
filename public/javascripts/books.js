//
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = function ReceivedCallback() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
//         }
//     };
//     request.open("GET", "https://stark-tundra-99254.herokuapp.com/api/books/", true);
//     request.send();
//
//
//
// function CreateTable(data){
//      let retVal = "";
//      retVal =
//          '<table class="table table-bordered table-hover"> \n' +
//         '	<thead> \n' +
//         '		<tr> \n' +
//         '			<th scope="col">Title</th> \n' +
//         '			<th scope="col">Author</th> \n' +
//         '			<th scope="col">isbn</th> \n' +
//         '			<th scope="col">Price</th> \n' +
//         '		</tr> \n' +
//         '	</thead> \n' +
//         '	<tbody> \n';
//
//     for (let book in data) {
//         retVal +=
//             '<tr> \n' +
//             '	<td>' + data[book]["name"] + '</td> \n' +
//             '	<td>' + data[book]["author"] + '</td> \n' +
//             '	<td>' + data[book]["isbn"] + '</td> \n' +
//             '	<td>' + data[book]["price"] + '</td> \n' +
//             '</tr> \n';
//     }
//
//     retVal +=
//         '</tbody> \n' +
//         '</table> \n' +
//         '</div> \n ' ;
//     return retVal;
// }
//
// //     function ADD(){
// //         let request = new XMLHttpRequest();
// //         let isbn = document.getElementById('isbn').value;
// //         let name = document.getElementById('name').value;
// //         let author = document.getElementById('author').value;
// //         let price = document.getElementById('price').value;
// //
// //
// //         request.onreadystatechange = function ReceivedCallback() {
// //             if (this.readyState == 4 && this.status == 200) {
// //                 document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
// //             }
// //         };
// //         request.open("POST", "http://localhost:3000/api/books/?name=" + name + "&author=" + author +"&isbn=" + isbn + "&price=" + price, true);
// //         request.send();
// // }
// //     let retVal = '';
// //
// //     for(let i = 0; i < data.length; i++) {
// //         let name = data["name"];
// //     }
// //
// //
// //     // for(let i = 0; i < data.length; i++) {
// //     //     '<p>Title: " + (data["name"]</p> \n' +
// //     //     'Author: + (data["author"] \n' +
// //     //     'ISBN: + (data["isbn"] \n' +
// //     //     'Price: + (data["price"] \n' +
// //     // }
// //     // for(let i = 0; i < data.length; i++){
// //     //     alert(data["name"]);
// //     // }
// //    //      retVal +=
// //    //          '<tr> \n' +
// //    //          '	<td>' + data["name"] + '</td> \n' +
// //    //          '	<td>' + data["author"] + '</td> \n' +
// //    //          '	<td>' + data["isbn"] + '</td> \n' +
// //    //          '	<td>' + data["price"] + '</td> \n' +
// //    //          '</tr> \n';
// //    //
// //    // }
// //  //   retVal +=
// //    //      '</tbody> \n' +
// //    //      '</table> \n' +
// //   //      '</div> \n ' ;
// //     return retVal;
// // }
