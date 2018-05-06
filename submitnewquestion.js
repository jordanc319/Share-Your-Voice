function submitNewQuestion()
{
  var question = document.getElementById("questionText").value
  var mc1 = document.getElementById("mc1").value
  var mc2 = document.getElementById("mc2").value
  var mc3 = document.getElementById("mc3").value
  var mc4 = document.getElementById("mc4").value
  var submitQuestion = firebase.database().ref("Votes").push({
    question: question,
  })
  var id = submitQuestion.key
  firebase.database().ref("Votes/" + id + "/buttonOne").update({
    name: mc1,
    votes: 0,
  })
  firebase.database().ref("Votes/" + id + "/buttonTwo").update({
    name: mc2,
    votes: 0,
  })
  firebase.database().ref("Votes/" + id + "/buttonThree").update({
    name: mc3,
    votes: 0,
  })
  firebase.database().ref("Votes/" + id + "/buttonFour").update({
    name: mc4,
    votes: 0,
  })
  firebase.database().ref("Votes/" + id).update({
    identification: id
  })
  firebase.database().ref('Completed').set("Data is logged", function(error) {
     if (error) {
       alert("Data could not be saved." + error);
     } else {
       location.href = "submitNewQuestion.html"
     }
  })
}
