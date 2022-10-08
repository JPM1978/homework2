class Car{

    constructor(model, color){
        this.model = model;
        this.color = color;
    }
}

class Toyota extends Car{
    constructor(model, color){
        super(model, color)
    }
}

const myCar = new Toyota('sonata', 'black');

console.log(myCar)