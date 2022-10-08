

const tom = {
    hungerLevel: 5,
    eat:function () {
        this.hungerLevel = this.hungerLevel -  1;
        console.log(`${this.hungerLevel} is less hungry`)
        console.log()
    },
    name: 'Bulbasaur',
    weight: 100,
    age: 1, 
    birthday: '08/26/2021',
    description: 'grass type',
    hungerLevel: 5,
    happinessLevel: 5,
    attentionLevel: 5,
    lifeStage: 'Baby', // baby, child, Teen or Adult
    isHungry: false,
    isHappy: true,
    isWantingToPlay: false,
    isNeedingAttention: false,
   
};


