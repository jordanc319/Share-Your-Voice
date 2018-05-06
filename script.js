function voteSubmitted(x)
{
  var numberOfVotes = []
  var updateData = firebase.database().ref("Votes/");
  updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val()
    numberOfVotes.push(data)
  })
  firebase.database().ref('Completed').set("Data is logged", function(error) {
     if (error) {
       alert("Data could not be saved." + error);
     } else {
       for(var i=0;i<numberOfVotes.length;i++)
       {
         if(numberOfVotes[i].buttonFour.name == document.getElementById("buttonFour").innerHTML)
         {
           var identification = numberOfVotes[i].identification
           if(x == "buttonOne")
           {
             var vote = numberOfVotes[i].buttonOne.votes + 1
             firebase.database().ref("Votes/" + identification + "/buttonOne").update({
                 votes: vote
             });
             firebase.database().ref('Completed').set("Data is logged", function(error) {
                if (error) {
                  alert("Data could not be saved." + error);
                } else {
                  console.log(vote)
                  disableButtons()
                }
             })
           }
           if(x == "buttonTwo")
           {
             var vote = numberOfVotes[i].buttonTwo.votes + 1
             firebase.database().ref("Votes/" + identification + "/buttonTwo").update({
                 votes: vote
             });
             firebase.database().ref('Completed').set("Data is logged", function(error) {
                if (error) {
                  alert("Data could not be saved." + error);
                } else {
                  console.log(vote)
                  disableButtons()
                }
             })
           }
           if(x == "buttonThree")
           {
             var vote = numberOfVotes[i].buttonThree.votes + 1
             firebase.database().ref("Votes/" + identification + "/buttonThree").update({
                 votes: vote
             });
             firebase.database().ref('Completed').set("Data is logged", function(error) {
                if (error) {
                  alert("Data could not be saved." + error);
                } else {
                  console.log(vote)
                  disableButtons()
                }
             })
           }
           if(x == "buttonFour")
           {
             var vote = numberOfVotes[i].buttonFour.votes + 1
             firebase.database().ref("Votes/" + identification + "/buttonFour").update({
                 votes: vote
             });
             firebase.database().ref('Completed').set("Data is logged", function(error) {
                if (error) {
                  alert("Data could not be saved." + error);
                } else {
                  console.log(vote)
                  disableButtons()
                }
             })
           }
         }
       }
     }
  })
}
function disableButtons()
{
  var array = ["buttonOne", "buttonTwo", "buttonThree", "buttonFour"]
  for(var i=0;i<array.length;i++)
  {
    document.getElementById(array[i]).disabled = true
  }
  showVotes()
}
function showVotes()
{
  var numberOfVotes = []
  var updateData = firebase.database().ref("Votes/");
  updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val()
    numberOfVotes.push(data)
  })
  firebase.database().ref('Completed').set("Data is logged", function(error) {
     if (error) {
       alert("Data could not be saved." + error);
     } else {
       for(var i=0;i<numberOfVotes.length;i++)
       {
         if(document.getElementById("buttonFour").innerHTML = numberOfVotes[i].buttonFour.name)
         {
           document.getElementById("buttonOne").innerHTML = numberOfVotes[i].buttonOne.votes + " votes"
           document.getElementById("buttonTwo").innerHTML = numberOfVotes[i].buttonTwo.votes + " votes"
           document.getElementById("buttonThree").innerHTML = numberOfVotes[i].buttonThree.votes + " votes"
           document.getElementById("buttonFour").innerHTML = numberOfVotes[i].buttonFour.votes + " votes"
         }
       }
     }
  });
}
