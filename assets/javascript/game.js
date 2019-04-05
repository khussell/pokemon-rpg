var offenseChar = "",
    defender= ""
    attackPower= 0;
    oChangedHP= 0;
    dChangedHP= 0;
    counterAttackPower= 0

var mander= $(".character1"), //contains name, picture, empty p for inital HP
    squirtle= $(".character2"),
    pikachu= $(".character3"),
    bulb= $(".character4")
    
     //empty div for enemies to be placed
    
    

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


var character1= characters[0],
    character2= characters[1],
    character3= characters[2],
    character4= characters[3]


var newButton= $("<button>")
    newButton.addClass("resetButton")
    $(".characters").append(newButton)
    newButton.text("reset game")
    newButton.hide()

$(document).ready(function(){


  $("#hP1").text(characters[0]['hP'])
  $("#hP2").text(characters[1]['hP'])
  $("#hP3").text(characters[2]['hP'])
  $("#hP4").text(characters[3]['hP'])




mander.on("click", function(){
  $(".chooseCharacter").css("float", "left")
  $("#gotOne").hide()
  if (offenseChar === ""){
    
    offenseChar= character1
    defenseChar= characters.filter(function(item){
      return item.name !== offenseChar["name"]
    })
    $(".enemyCharacters").show()
    $(".enemies").append(squirtle)
    $(".enemies").append(pikachu)
    $(".enemies").append(bulb)
  }else if(offenseChar !== "" && defender === ""){
    defender= character1
    $("#defenderImage").append(mander)
    dChangedHP = defender["hP"]
    $(".defenderHead").show()
    $(".directions").text("Click the button to attack, but watch out he has a counter attack!")
    $("#defenderImage").css("border", "red outset 3px")
    $(".defenderHP").html("Defender HP: " + dChangedHP)
    $(".stats").html("")
    $(".arena").show()
} 
})



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
    dChangedHP = defender["hP"]
    $(".defenderHead").show()
    $(".directions").text("Click the button to attack, but watch out he has a counter attack!")
    $("#defenderImage").css("border", "red outset 3px")
    $(".defenderHP").html("Defender HP: " + dChangedHP) 
    $(".stats").html("") 
    $(".arena").show()
}
})


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
    dChangedHP = defender["hP"]
    $(".defenderHead").show()
    $(".directions").text("Click the button to attack, but watch out he has a counter attack!")
    $("#defenderImage").css("border", "red outset 3px")
    $(".defenderHP").html("Defender HP: " + dChangedHP)
    $(".stats").html("")
    $(".arena").show()
}
})



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
    dChangedHP = defender["hP"]
    $(".defenderHead").show()
    $(".directions").text("Click the button to attack, but watch out he has a counter attack!")
    $("#defenderImage").css("border", "red outset 3px")
    $(".defenderHP").html("Defender HP: " + dChangedHP)
    $(".stats").html("")
    $(".arena").show()
}
})



$("#attack").on("click", function(){
 var initialAttack= offenseChar["attackPower"]
     counterAttackPower= defender["counterAttackPower"]
     if(defender === ""){
       $(".directions").text("You need to choose someone to fight!")
       $(".stats").text("")
     }else if(attackPower === 0){
       attackPower= offenseChar["attackPower"]
       oChangedHP= offenseChar["hP"]
       dChangedHP -= attackPower
       if(dChangedHP <=0){
        $(".stats").html("You gave " + attackPower + " damage and took NO damage.")
        game.characterHPText()
        $(".defenderHP").html("Defender HP: " + dChangedHP)   
        $(".yourHP").html("Your HP: " + oChangedHP)
        attackPower += initialAttack
       game.didPlayerLose()
       game.didDefenderLose()



       }else{
       oChangedHP -= counterAttackPower
       
       game.characterHPText()
       $(".defenderHP").html("Defender HP: " + dChangedHP)   
       $(".yourHP").html("Your HP: " + oChangedHP)
       $(".stats").html("You gave " + attackPower + " damage and took " + counterAttackPower +" damage.")
       attackPower += initialAttack
       game.didPlayerLose()
       game.didDefenderLose()
       }
    
      
     }else{
      dChangedHP -= attackPower  
     if(dChangedHP <=0){
      $(".stats").html("You gave " + attackPower + " damage and took NO damage.")
      game.characterHPText()
      $(".defenderHP").html("Defender HP: " + dChangedHP)   
      $(".yourHP").html("Your HP: " + oChangedHP)
      attackPower += initialAttack
     game.didPlayerLose()
     game.didDefenderLose()
     }else{
      oChangedHP -= counterAttackPower
      
      game.characterHPText()
      $(".defenderHP").html("Defender HP: " + dChangedHP)   
      $(".yourHP").html("Your HP: " + oChangedHP)
      $(".stats").html("You gave " + attackPower + " damage and took " + counterAttackPower +" damage.")
      attackPower += initialAttack
      game.didPlayerLose()
      game.didDefenderLose()
    }
  }

    
    
    
  

})

$(".resetButton").on("click", function(){
  location.reload()
})


})


var game = {
    didPlayerLose: function(){
      if (oChangedHP <= 0){
        this.lost()
      }
    },

    lost: function(){
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
        $("#gotOne").show()
        $(".directions").text("Yay, you got one! Click another one to fight!")
        dChangedHP= 0
        counterAttackPower= 0
        $(".defenderHP").html("Defender HP: " + dChangedHP)   
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
    }
   

}


