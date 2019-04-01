var offenseChar,
    offenseAttackPower,
    offenseHealthPoints,
    defenseChar,
    defenseCounterAttackPower,
    defenseHealthPoints

var character1= $("#character1"), //contains name, picture, empty p for inital HP
    character2= $("#character2"),
    character3= $("#character3"),
    character4= $("#character4"),
    initialhP1Text = $("#hp1").text(),
    initialhP2Text = $("#hp2").text(),
    initialhP3Text = $("#hp3").text(),
    initialhP4Text = $("#hp4").text(),
    enemies = $(".enemies"), //empty div for enemies to be placed
    youImage= $("#youImage"),
    youHP= $("#youHP"),
    youAttack= $("#youAttackPower"),
    defenderImage= $("#defenderImage"),
    defenderHP= $("#defenderHP"),
    defenderCounter= ("#defenderCounterAttack")

var characters= {
      character1: {
          hP: 150,
          initialAttackPower: 9,
          counterAttackPower: 13
      },
      character2: {
          hP: 130,
          initialAttackPower: 8,
          counterAttackPower: 11
      },
      character3: {
          hP: 100,
          initialAttackPower: 5,
          counterAttackPower: 7
      },
      character4: {
          hP: 120,
          initialAttackPower: 7,
          counterAttackPower: 10
      }
}


var game={

}



document.ready