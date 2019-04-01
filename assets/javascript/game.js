var offenseChar = "",
    initialOffenseAttackPower,
    offenseAttackPower=0,
    offenseHealthPoints,
    defenseChar,
    defenseCharArray=[],
    defenseCounterAttackPower,
    defenseHealthPoints,
    defender
    

var yoda= $("#character1"), //contains name, picture, empty p for inital HP
    luke= $("#character2"),
    obi= $("#character3"),
    mace= $("#character4"),
    enemies = $(".enemies"), //empty div for enemies to be placed
    youImage= $("#youImage"),
    youHP= $("#youHP"),
    youAttack= $("#youAttackPower"),
    defenderImage= $("#defenderImage"),
    defenderHP= $("#defenderHP"),
    defenderCounter= $("#defenderCounterAttack")

var characters= [
       {
          name: "Yoda",
          hP: 150,
          initialAttackPower: 9,
          counterAttackPower: 13
      },
       {
          name: "Luke Skywalker",
          display: $("#character2"),
          hP: 100,
          initialAttackPower: 5,
          counterAttackPower: 7
      },
       {
          name: "Obi Wan Kenobi",
          display: obi,
          hP: 130,
          initialAttackPower: 8,
          counterAttackPower: 11
      },
       {
          name: "Mace Windu",
          display: mace,
          hP: 120,
          initialAttackPower: 7,
          counterAttackPower: 10
      }
    ]


var character1= characters[0],
    character2= characters[1],
    character3= characters[2],
    character4= characters[4]





var game={
   
}



$(document).ready(function(){


  $("#hP1").text(characters[0]['hP'])
  $("#hP2").text(characters[1]['hP'])
  $("#hP3").text(characters[2]['hP'])
  $("#hP4").text(characters[3]['hP'])




yoda.on("click", function(){
  if (offenseChar === ""){
    offenseChar= character1
    defenseChar= characters.filter(function(item){
      return item.name !== offenseChar["name"]
    })
    $(".enemies").append(luke)
    $(".enemies").append(obi)
    $(".enemies").append(mace)
  }else if(offenseChar !== "" && defender === undefined){
    defender= character1
    $("#defenderImage").append(yoda)
}
})



luke.on("click", function(){
  if(offenseChar === ""){
    offenseChar= character2
    defenseChar= characters.filter(function(item){
      return item.name !== "Luke Skywalker"
      })
    $(".enemies").append(yoda)
    $(".enemies").append(obi)
    $(".enemies").append(mace)
  }else if(offenseChar !== "" && defender === undefined){
    defender= character2
    $("#defenderImage").append(luke)
}
})


obi.on("click", function(){
  if(offenseChar === ""){
    offenseChar= character3
    defenseChar= characters.filter(function(item){
      return item.name !== "Obi Wan Kenobi"
    })
    $(".enemies").append(yoda)
    $(".enemies").append(luke)
    $(".enemies").append(mace)
  }else if(offenseChar !== "" && defender === undefined){
    defender= character3
    $("#defenderImage").append(obi)
}
})



mace.on("click", function(){
  if(offenseChar === ""){
    offenseChar= character4
    defenseChar= characters.filter(function(item){
      return item.name !== "Mace Windu"
    })
    $(".enemies").append(yoda)
    $(".enemies").append(luke)
    $(".enemies").append(obi)
  }else if(offenseChar !== "" && defender === undefined){
    defender= character4
    $("#defenderImage").append(mace)
}
})

initialOffenseAttackPower= offenseChar["initialAttackPower"]
offenseHealthPoints=offenseChar["hP"]

$("#attack").on("click", function(){
    
    offenseAttackPower += initialOffenseAttackPower
    defenseCounterAttackPower= defender["counterAttackPower"]
    defenseHealthPoints= defender["hP"]- offenseAttackPower
    $("#defenderHP").text(defenseHealthPoints)
    
    offenseHealthPoints-=defenseCounterAttackPower
    $("#youHP").text(offenseHealthPoints)

})




})