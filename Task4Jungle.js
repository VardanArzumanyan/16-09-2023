class Jungle {
  constructor() {
    this.animals = [];
  }
  addAnimal(animal) {
    this.animals.push(animal);
  }
  soundOff() {
    this.animals.forEach((animal) => {
      animal.makeSound();
    });
  }
}

class Animal {
  constructor(name, energy = 0) {
    this.name = name;
    this.energy = energy;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
    this.energy -= 3;
  }

  eat(food) {
    console.log(`${this.name} is eating ${food.constructor.name}`);
    this.energy += 5;
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
    this.energy += 10;
  }
}

class Food {
  constructor() {
    this.energy = 10;
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name);
  }

  eat(food) {
    if (food instanceof Grain) {
      console.log(`${this.name}:I cant eat that`);
    } else {
      super.eat(food);
    }
  }
  sleep() {
    super.sleep();
    this.energy += 5;
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    this.energy -= 4;
  }

  eat(food) {
    super.eat(food);
    this.energy += 2;
  }

  play() {
    if (this.energy >= 8) {
      console.log(`${this.name}:Oooo Oooo `);
      this.energy -= 8;
    } else {
      console.log(`${this.name}:I am too tired`);
    }
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }
}

class Meat extends Food {
  constructor() {
    super();
  }
}

class Fish extends Food {
  constructor() {
    super();
  }
}

class Grain extends Food {
  constructor() {
    super();
  }
}

let jungle = new Jungle();
let tiger = new Tiger("Tiger");
let monkey = new Monkey("Monkey");
let snake = new Snake("Snake");
let fish = new Fish();
let meat = new Meat();
let grain = new Grain();

jungle.addAnimal(tiger);
jungle.addAnimal(monkey);
jungle.addAnimal(snake);

tiger.eat(meat);
tiger.eat(grain);
tiger.sleep();
monkey.play();
monkey.sleep();
jungle.soundOff();
