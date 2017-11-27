


//When you click on the workout button
$(document).ready(function() {

    var workouts = ["Smash IT"];
    
//sets the type on the giphy search
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + workouts + "&api_key=dc6zaTOxFJmzC&limit=2";
    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
//Loop that switches between still and animated
         for(var i=0; i < results.length; i++){
             var workoutDiv = $('<div class="workout-item">')
             var animated = results[i].images.fixed_height.url;
             var still = results[i].images.fixed_height.url;
             console.log(still)
             var workoutImage = $('<img>');
             workoutImage.attr('src', animated);
             workoutImage.attr('data-still', still);
             workoutImage.attr('data-animate', animated);
             workoutImage.attr('data-state', 'still')
             workoutImage.addClass('workoutImage');
//Made it prepend, so the user can see the new images once button is clicked
             
             workoutDiv.prepend(workoutImage)
             $('#gifs-appear-here').prepend(workoutDiv);
         }
});
});









