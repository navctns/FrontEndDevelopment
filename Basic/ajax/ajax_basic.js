
var delayTimer;
    $('#search_txt').keyup(function() {
      clearTimeout(delayTimer);
      $('#search_results').text('Loading...');

      delayTimer = setTimeout(function(){

        $ajax({
          url='/search/',
          data:{
            'search_txt':'hello'
          },
          dataType: "json",
          success: function(data){
            $('#search-result').text('AJAX OK'),
          }
        });
      }, 1000);
    });
