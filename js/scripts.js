// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

var cheney = '99004';
var spokane = '99220';

  // 2. _simpleWeather()_ object
  $.simpleWeather({
    
    location: cheney, // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {

      //Get and output weather HERE!!!!








      
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });