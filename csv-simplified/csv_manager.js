module.exports = {
    addTwoNumbers: (x, y) => {
        console.log(x+y);
        return x + y;
    },

    loadCSV: (csv) => {

    },

    loadCSVFile: (path) => { 
          //This will read the path using filesystem FS, load the CSV
        Papa.parse(path.files[0], {
            complete: function(results) {
                console.log(results);
            }
        });
    }
}

 