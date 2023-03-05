"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
let user = new User('Luthfi', 31);
console.log(user);
// public = bisa diakses di semua class/dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.read = true;
        this.write = true;
        this._email = '';
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        if (value.length < 6) {
            this._email =
                'Email contains must be greater than 5 characters';
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
    static getNameRole() {
        return 'Hei';
    }
}
Admin.getRoleName = 'Admin';
// let admin = new Admin('Tonyhawk', 31, '089507854000');
// console.log(admin);
// admin.email = 'a@a.c';
// console.log(admin.email);
let admin = Admin.getRoleName;
console.log(admin);
console.log(Admin.getNameRole());
