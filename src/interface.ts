interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  constructor(public name: string, public isGaming: boolean) {}

  on(): void {
    console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}

class Macbook implements Laptop {
  constructor(public name: string, public keyboardLight: boolean) {}

  on(): void {
    console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}

let asus = new Asus('Asus Gaming', true);
console.log(asus);

let mb = new Macbook('Macbook', true);
console.log(mb);
