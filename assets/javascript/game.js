//initializing some variables
var offenseChar = "",
    defender= "",
    attackPower= 0,
    oChangedHP= 0,
    dChangedHP= 0,
    counterAttackPower= 0,
    initialAttack= 0

// these variables contain name, picture, empty <p> for character HP    
var mander= $(".character1"), 
    squirtle= $(".character2"),
    pikachu= $(".character3"),
    bulb= $(".character4")
    
     
    
    
//array of objects with my character names and battle stats
var characters= [
       {
          name: "Charmander",
          hP: 150,
          attackPower: 8,
          counterAttackPower: 20
      },
       {
          name: "Squirtle",
          hP: 100,
          attackPower: 15,
          counterAttackPower: 5
      },
       {
          name: "Pikachu",
          hP: 120,
          attackPower: 9,
          counterAttackPower: 9
      },
       {
          name: "Bulbasaur",
          hP: 180,
          attackPower: 3,
          counterAttackPower: 25
      }
    ]



//variables to get each character's position info in the characters array    
var character1= characters[0],
    character2= characters[1],
    character3= characters[2],
    character4= characters[3]



//making reset button for end of game if won or lost and hiding until needed
var newButton= $("<button>")
    newButton.addClass("resetButton")
    $(".characters").append(newButton)
    newButton.text("reset game")
    newButton.hide()




//start of game
$(document).ready(function(){


//displaying each characters HP
  $("#hP1").text(characters[0]['hP'])
  $("#hP2").text(characters[1]['hP'])
  $("#hP3").text(characters[2]['hP'])
  $("#hP4").text(characters[3]['hP'])



//character click functions
mander.on("click", function(){
  $(".chooseCharacter").css("float", "left")
  $("#gotOne").hide()
  if (offenseChar === ""){
    //if there is no player chosen when charmander was clicked, charmander will be the player
    offenseChar= character1
    //filter through the characters array and return characters that do not have the name of the player chosen
    //this will return an array of our enemy characters
    defenseChar= characters.filter(function(item){
      return item.name !== offenseChar["name"]
    })
    $(".enemyCharacters").show()
    //moving the enemy characters to the enemies div
    $(".enemies").append(squirtle)
    $(".enemies").append(pikachu)
    $(".enemies").append(bulb)
  }else if(offenseChar !== "" && defender === ""){
    //if when charmander is clicked there is already a player chosen, then charmander is being chosen as the defender
    defender= character1
    //defender div will get charmander
    $("#defenderImage").append(mander)
    //defender styling, HP stats, and directions to user
    game.defenderSetUp()
 
} 
})



//same logic as Charmander
squirtle.on("click", function(){
  $(".chooseCharacter").css("float", "left")
  $("#gotOne").hide()
  if(offenseChar === ""){
    offenseChar= character2
    defenseChar= characters.filter(function(item){
      return item.name !== "Squirtle"
      })
    $(".enemyCharacters").show()  
    $(".enemies").append(mander)
    $(".enemies").append(pikachu)
    $(".enemies").append(bulb)
  }else if(offenseChar !== "" && defender === ""){
    defender= character2
    $("#defenderImage").append(squirtle)
    game.defenderSetUp()
  }
})



//same logic as Charmander
pikachu.on("click", function(){
  $(".chooseCharacter").css("float", "left")
  $("#gotOne").hide()
  if(offenseChar === ""){
    offenseChar= character3
    defenseChar= characters.filter(function(item){
      return item.name !== "Pikachu"
    })
    $(".enemyCharacters").show()
    $(".enemies").append(mander)
    $(".enemies").append(squirtle)
    $(".enemies").append(bulb)
  }else if(offenseChar !== "" && defender === ""){
    defender= character3
    $("#defenderImage").append(pikachu)
    game.defenderSetUp()
  }
})




//same logic as Charmander
bulb.on("click", function(){
  $(".chooseCharacter").css("float", "left")
  $("#gotOne").hide()
  if(offenseChar === ""){
    offenseChar= character4
    defenseChar= characters.filter(function(item){
      return item.name !== "Bulbasaur"
    })
    $(".enemyCharacters").show()
    $(".enemies").append(mander)
    $(".enemies").append(squirtle)
    $(".enemies").append(pikachu)
  }else if(offenseChar !== "" && defender === ""){
    defender= character4
    $("#defenderImage").append(bulb)
    game.defenderSetUp()
}
})




//when attack button is clicked, initial attack will store the player's attack power
//counterAttackPower will store defender's counter attack
$("#attack").on("click", function(){
     initialAttack= offenseChar["attackPower"]
     counterAttackPower= defender["counterAttackPower"]
     //if there is no defender, direction will alert to user what to do
     if(defender === ""){
       $(".directions").text("You need to choose someone to fight!")
       $(".stats").text("")
      //if attack power is 0 (meaning this is the first attack), player stats are stored
      //enemy HP is reduced
     }else if(attackPower === 0){
       attackPower= offenseChar["attackPower"]
       oChangedHP= offenseChar["hP"]
       dChangedHP -= attackPower
       //if enemy HP is 0 or below go to dHP0 function for defender losing
       if(dChangedHP <=0){
         game.dHP0()
         //else go to counter attack function for defender's counter attack
       }else{
         game.counterAttack()
       } 
      // if there is a defender and this isn't the first attack, reduce defenders HP and go to certain game function
     }else{
      dChangedHP -= attackPower  
      if(dChangedHP <=0){
         game.dHP0()
      }else{
         game.counterAttack()
      }
     }

})





//when reset button is pressed the webpage will reload
$(".resetButton").on("click", function(){
  location.reload()
})


})





//game functions object
var game = {


    didPlayerLose: function(){
      //if player's HP is 0 or less go to game.lost function
      if (oChangedHP <= 0){
        this.lost()
      }
    },


    lost: function(){
      //if player lost, tell user and have reset button
      if (oChangedHP <=0){
        $(newButton).show()
        $(".arena").hide()
        $(".lost").css("display", "block")
        $(".lost").text("Sorry " + offenseChar["name"] + " , you lost!!!")
      }else{
        //defender lost, if there are no other defenders available this.win()
        //defender lost so their image will disappear and defender stats will re-initialize
        defender=""
        $("#defenderImage").empty()
        $(".defenderHead").hide()
        $("#defenderImage").css("border", "none")
        //pokeball
        $("#gotOne").show()
        $(".directions").text("Yay, you got one! Click another one to fight!")
        //re-initialize
        dChangedHP= 0
        counterAttackPower= 0
        $(".defenderHP").html("Defender HP: " + dChangedHP)   
        //if no more enemys left then go to win function
        if($(".enemies").html()=== ''){
          this.win()
        }
      }
    },

    didDefenderLose: function(){
      if(dChangedHP <=0){
        this.lost()
      }
    },
  

    win: function(){
     //hide and show end screen with reset button
      $(".arena").hide()
      $(".enemyCharacters").hide()
      $(newButton).show()
      $("#winPhoto").show()
      $(".character1").css("border", "none")
      $(".character2").css("border", "none")
      $(".character3").css("border", "none")
      $(".character4").css("border", "none")
      $("p").hide()
      $("h1").text("Congrats, you caught them ALL!!!")
      $("h2").text(offenseChar["name"] + " wins!")
      $("img").css("height", "400px")
    },


    characterHPText: function(){
      //linking HP to display character boxes
      if(offenseChar === character1){
        $("#hP1").text(oChangedHP)
      }else if(offenseChar === character2){
        $("#hP2").text(oChangedHP)
      }else if(offenseChar === character3){
        $("#hP3").text(oChangedHP)
      }else{
        $("#hP4").text(oChangedHP)
      }
       
      if(defender === character1){
        $("#hP1").text(dChangedHP)
      }else if(defender === character2){
        $("#hP2").text(dChangedHP)
      }else if(defender === character3){
        $("#hP3").text(dChangedHP)
      }else{
        $("#hP4").text(dChangedHP)
      }
    },



    dHP0: function(){
      //when defender HP is 0 or below
      //update stats and HP's
      //add to attack power
      $(".stats").html("You gave " + attackPower + " damage and took NO damage.")
      game.characterHPText()
      $(".defenderHP").html("Defender HP: " + dChangedHP)   
      $(".yourHP").html("Your HP: " + oChangedHP)
      attackPower += initialAttack
      //check who lost
      game.didPlayerLose()
      game.didDefenderLose()

    },


    counterAttack: function(){
      //when defender does not die after an attack on them, they will counter
      //updat stats
      //add to attack power
      //check if anyone lost
      oChangedHP -= counterAttackPower
      game.characterHPText()
      $(".defenderHP").html("Defender HP: " + dChangedHP)   
      $(".yourHP").html("Your HP: " + oChangedHP)
      $(".stats").html("You gave " + attackPower + " damage and took " + counterAttackPower +" damage.")
      attackPower += initialAttack
      game.didPlayerLose()
      game.didDefenderLose()
    },



    defenderSetUp: function(){
      dChangedHP = defender["hP"]
      $(".defenderHead").show()
      $(".directions").text("Click the button to attack, but watch out he has a counter attack!")
      $("#defenderImage").css("border", "red outset 3px")
      $(".defenderHP").html("Defender HP: " + dChangedHP)
      $(".stats").html("")
      $(".arena").show()


    }
   

}


