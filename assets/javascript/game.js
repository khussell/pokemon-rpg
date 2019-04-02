var offenseChar = "",
    defender= ""
  
    
    

var yoda= $("#character1"), //contains name, picture, empty p for inital HP
    luke= $("#character2"),
    obi= $("#character3"),
    mace= $("#character4")
     //empty div for enemies to be placed
    
    

var characters= [
       {
          name: "Yoda",
          hP: 150,
          attackPower: 9,
          counterAttackPower: 13
      },
       {
          name: "Luke Skywalker",
          hP: 100,
          attackPower: 5,
          counterAttackPower: 7
      },
       {
          name: "Obi Wan Kenobi",
          hP: 130,
          attackPower: 8,
          counterAttackPower: 11
      },
       {
          name: "Mace Windu",
          hP: 120,
          attackPower: 7,
          counterAttackPower: 10
      }
    ]


var character1= characters[0],
    character2= characters[1],
    character3= characters[2],
    character4= characters[4]




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
  }else if(offenseChar !== "" && defender === ""){
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
  }else if(offenseChar !== "" && defender === ""){
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
  }else if(offenseChar !== "" && defender === ""){
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
  }else if(offenseChar !== "" && defender === ""){
    defender= character4
    $("#defenderImage").append(mace)
}
})



$("#attack").on("click", function(){
 var initialAttack= offenseChar["attackPower"],
  attackPower= offenseChar["attackPower"],
  oChangedHP= offenseChar["hP"],
  dChangedHP= defender["hP"],
  counterAttackPower= defender["counterAttackPower"]
    oChangedHP -= counterAttackPower
    dChangedHP -= attackPower
    $("#defenderHP").text(dChangedHP)   
    $("#youHP").text(oChangedHP)
    attackPower += initialAttack
    
  

    
    
  

})




})