window.onload = function() {
    
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    var arrayLength;
    var data, data2;
    function upload(evt) {
        console.log("uploaded");
        alert('file chosen');
        var data = null;
        var file = evt.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(event) {
            var csvData = event.target.result;
            data = Papa.parse(csvData);
            Papa.parse(file, {
                complete: function(results) {
                    console.log('Papa reporting => ', results);
                }
                //header: true
                
            });
        
            console.log(data.data);
            data2 = data.data;
        
            arrayLength = data.data.length;
            console.log(arrayLength);

            // Clears the Previous file's data
            $("#header").empty();

            // for (var i = 0; i < arrayLength; i++) {
            //     console.log(data.data[i]);
            //     $("#header").append("<li>" + JSON.stringify(data.data[i]) + "</li>");
            // }
        
        };
        reader.onerror = function() {
            alert('Unable to read ' + file.fileName);
        };  
    }

    $('#parse').click(function() {
        alert('Parse button Clicked!');
        // alert(arrayLength);
        // alert(data2);

        $("#header, #headColumns, #bodyData, #checkColumnsDiv").empty();

        //OLD CODE DISPLAYED IN LI 

        // for (var i = 0; i < arrayLength; i++) {
        //     console.log(data2[i]);
        //     $("#header").append("<li>" + JSON.stringify(data2[i]) + "</li>");
        // }


         $("#no_of_rows, #name, #shift, #title, #orderByColumns, #no_of_columns").empty();
         $('#no_of_columns').append(data2[0].length);
         $('#no_of_rows').append(arrayLength);
        // $('#name').append(data2[0][0]);
        // $('#shift').append(data2[0][1]);
        // $('#title').append(data2[0][2]);


        for (var i = 0; i < data2[0].length; i++) {
            console.log('first row headings',data2[i]);

            $("#headColumns").append("<th style='width: 120px;'>" + data2[0][i] + "</th>");

            // Order By Dropdown
            $("#orderByColumns").append("<option" + " value=" + data2[0][i] + ">" + data2[0][i] + "</option>");

            // check Columns Div
            // $("#checkColumnsDiv").append("<option" + " value=" + data2[0][i] + ">" + data2[0][i] + "</option>");

            $("#checkColumnsDiv").append('<div class="checkbox-inline"> <label> ' + data2[0][i] + '<input style="position:relative; margin-left:10px;" type="checkbox" value=" ' + data2[0][i] + ' "></label></div>');
        }

        




        for (var i = 0; i < arrayLength; i++) {
            // $("#bodyData").append("<tr><td>" + data2[i] + "</td></tr>");

            $("#bodyData").append("<tr>");

            for( var j = 0; j < data2[0].length ; j++) {
                $('#bodyData').append("<td>" + data2[i+1][j] + "</td>");
            }
            $("#bodyData").append("</tr>");

        }



    });
}

