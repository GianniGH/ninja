class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(this.name);
    }

    showStats(ninja) {
        console.log(ninja)
    }

    drinkSake() {
        this.health += 10
    }
}

const ninja1 = new Ninja('Pepe', 10, 5, 5)
console.log(ninja1)

ninja1.sayName()
ninja1.showStats(ninja1)
ninja1.drinkSake()
console.log(ninja1.health)
