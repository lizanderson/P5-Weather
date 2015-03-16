var cheney = '99004';
var spokane = '99220';

  // 2. _simpleWeather()_ object
  $.simpleWeather({
    
    location: cheney, // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {

      //Get and output weather HERE!!!!
      $.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {

      if (weather.code >= 28 && weather.code <= 34) {
        $('.weatherIcon').addClass('clear')
      };

      if (weather.code >= 23 && weather.code <= 24) {
        $('.weatherIcon').addClass('windy')
      };

      if (weather.code >= 11 && weather.code <= 12) {
        $('.weatherIcon').addClass('rainy')
      };

      if (weather.code >= 19 && weather.code <= 22) {
        $('.weatherIcon').addClass('fog')
      };

      if (weather.code >= 13 && weather.code <= 16) {
        $('.weatherIcon').addClass('snow')
      };
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      //Get & store state
      var state = weather.region;
      //Get & store thumbnail
      var thumb = weather.thumbnail;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.rainy.png img').attr('src', thumb);
      $('.clear.png img').attr('src', thumb);
      $('.windy.png img').attr('src', thumb);
      $('.fog.png img').attr('src', thumb);
      $('.snow.png img').attr('src', thumb);
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
        
      console.log(weather);
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
};

   // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });