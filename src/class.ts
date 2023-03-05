class User {
  constructor(public name: string, public age: number) {}

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

let user = new User('Luthfi', 31);

console.log(user);

// public = bisa diakses di semua class/dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  private _email: string = '';

  constructor(
    public name: string,
    public age: number,
    public phone: string
  ) {
    super(name, age);
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 6) {
      this._email =
        'Email contains must be greater than 5 characters';
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin('Tonyhawk', 31, '089507854000');
console.log(admin);

admin.email = 'a@a.c';
console.log(admin.email);
