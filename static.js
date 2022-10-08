class Hero{
    constructor(name){
        this.name = name;
        Hero.count++;
    }

static count = 0;

static countHeros(){
    console.log(Hero.count)
}
}


const staticshock = new Hero('staticshock');
const ironman = new Hero('IronMan');
const Wonderwoman = new Hero('wonderwoman');
const Batman = new Hero('Batman');

Hero.countHeros()

