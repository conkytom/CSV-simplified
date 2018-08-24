(function() {
    function FileCtrl() {
        var data;
 
        function handleFileSelect(evt) {
          var file = evt.target.files[0];
       
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
              data = results;
            }
          });
        }
       
        $(document).ready(function(){
          $("#csv-file").change(handleFileSelect);
        });
    }

    angular
        .module('CSV-simplified')
        .controller('FileCtrl', [FileCtrl]);
})();