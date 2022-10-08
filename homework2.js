// Create fighter class
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Fighter{
   constructor(name,health,strength,defense){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
   }
   attack(defender){
    const damage = this.strength - defender.defense
    if (damage >= 0) {
      defender.health = defender.health - damage // 
    console.log(`${this.name} did ${damage} damage to ${defender.name} who is left with ${defender.health} health.`)
    }
    
  }  
}

let ryu = new Fighter()  // Create a new instance of fighter 
ryu.name = "Ryu"
ryu.health = 10
ryu.strength = 7
ryu.defense = 5

let ken = new Fighter() // Create another new instance of a fighter
ken.name = "Ken"
ken.health = 10
ken.strength = 9
ken.defense = 5


while (ryu.health > 0 || ken.health > 0){ // run loop while fighters have health > 0
   

  // console.log(`ken's health is ${ken.health} before he attacks`
   ken.attack(ryu)
    if (ryu.health === 0){
      console.log("Ken Wins!")
      break
    } else {
      // console.log(`Ryu's health is ${ryu.health} before he attacks`)
      ryu.attack(ken)
    if (ken.health === 0){
      console.log("Ryu Wins!!")
      break
    }  
    }
// console.log(`Ken's health is ${ken.health} at the end of the while loop`) 
// console.log(`Ryu's health is ${ryu.health} at the end of the while loop`) 

} 






