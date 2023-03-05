"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log('Nyala');
    }
    off() {
        console.log('Mati');
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log('Nyala');
    }
    off() {
        console.log('Mati');
    }
}
let asus = new Asus('Asus Gaming', true);
console.log(asus);
let mb = new Macbook('Macbook', true);
console.log(mb);
