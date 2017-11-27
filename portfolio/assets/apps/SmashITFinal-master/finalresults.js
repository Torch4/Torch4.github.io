



$(document).ready(function(){
     var users;
     var config = {
        apiKey: "AIzaSyAzda9qEPbmQKSdXCfY5ZjxaLjvS0lLZh4",
        authDomain: "burpees-and-stuff.firebaseapp.com",
        databaseURL: "https://burpees-and-stuff.firebaseio.com",
        projectId: "burpees-and-stuff",
        storageBucket: "",
        messagingSenderId: "135624626399"
      };

      firebase.initializeApp(config);
      var database = firebase.database();
      
      function writeScore(scoreType,score) {
          database.ref(scoreType).push({
              score: score
          });
      }
    function topThree() {

if cardAmount === 0;
var hardScore = new Array();
if (hardScore.length === 0) {
 hardScore.push(stopwatch.time);
    
    else if cardAmount === 26    
    var mediumScore = new Array();
    if (medium.length === 0) {
     mediumScore.push(stopwatch.time);
        
        else cardAmount === 39
        var easyScore = new Array();
        if (easyScore.length === 0) {
         easyScore.push(stopwatch.time);
            
            
                



}
    // seeding the database - remove me    
    var userscores = Array.from({length: 13}, () => Math.floor(Math.random() * 120));
    for(var i=0; i<userscores.length; i++){
        var score = userscores[i]
        writeScore('easyScore/',score);
        writeScore('mediumScore/',score);
        writeScore('hardScore/',score)
    }
    // end of seeding the database
    
    function sortNumber(a,b) {
       return a - b;
    }

    function getHighestScores(scoreType,scoreNum) {
        var highScores= []
        database.ref(scoreType).orderByChild("score").limitToLast(scoreNum).once('value').then(function(snapshot){
             users = snapshot.val()
                 
             for(var key in users) {
                    var user = users[key];
                    highScores.push(user.score)
                }
            highScores.sort(sortNumber).reverse();
        });
        return highScores;
    }
    console.log(getHighestScores('easyScore/',3))

    

    
});

};