/**
 * A class that represents a Duck.
 * Intended to be extends to specific species.
 * Abstract class: can have undefined methods in them;
 */
export abstract class Duck {
  
  protected flyBehavior:FlyBehavior = new CanFlyBehavior();

  /**
   * Has the duck make a sound
   */
  quack() {
    console.log("quack!"); //prints a message
  }

  /**
   * Has the duck swim.
   * @param distance how far to swim
   */
  swim(distance:number) {
    console.log("Swims the "+distance+"m duckstyle.") //prints a message about swimming
  }

  /**
   * Gets the duck's description (what it looks like)
   * @returns A desription of the duck
   */
  abstract display():string;

  fly() {
    //console.log("Flies away!");
    this.flyBehavior.fly();
  }
}

interface FlyBehavior {
  fly():void;
}

class CanFlyBehavior implements FlyBehavior {
  fly():void  {
    console.log("Flies away!");
  }
}

class NoFlyBehavior {
  fly():void {}
}

let behavior = new CanFlyBehavior();
behavior.fly();

export class RedheadDuck extends Duck {
  
  constructor() {
    super();
  }

  display() {
    return "Looks like a RedHead";
  }
}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {
  
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!"
  }

  fly() {}  
}

export class DecoyDuck extends Duck{
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }
  quack() {}
  fly() {}
  display() {
    return "Looks like a duck, but isn't"
  }
}