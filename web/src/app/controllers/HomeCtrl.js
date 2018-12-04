window.onload = function() {
    
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    function upload(evt) {
        console.log("uploaded")
        var data = null;
        var file = evt.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(event) {
            var csvData = event.target.result;
            var data = Papa.parse(csvData);
        
            console.log(data.data);
        
            var arrayLength = data.data.length;
            console.log(arrayLength);
            for (var i = 0; i < arrayLength; i++) {
                console.log(data.data[i]);
                $("#header").append("<li>" + JSON.stringify(data.data[i]) + "</li>");
            }
        
        };
        reader.onerror = function() {
            alert('Unable to read ' + file.fileName);
        };  
    }
}