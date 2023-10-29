// interface Animal {
//     name: string,
//     age: number,

//     getBirthDate(): Date; 
// };

// class Bird implements Animal {
//     constructor(
//         public name: string,
//         private birthDate: Date) {}

//     get age() {
//         var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
//         return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//     }

//     getBirthDate(): Date {
//         return this.birthDate;
//     }

//     fly() {
//         console.log(`${this.name} está voando!`)
//     }
// }

// const parrot = new Bird(
//     'Papagaio',
//     new Date(Date.parse('Aug 16, 2015')),
// );

// console.log(parrot.age);
// parrot.fly();

/* Inicio Exercicio para FIXAÇÃO de interface MYINTERFACE */

// interface MyInteface {
//     myNumber: number,
//     myFunc(myParam: number): string,
// }

// class myClass implements MyInteface {
//     constructor(public myNumber: number){ }

//     myFunc(myParam: number): string {
//         return `myNumber + myParam: ${this.myNumber + myParam}`;
//     }
// }

// const object1 = new myClass(35);
// console.log(object1.myFunc(22));
// console.log(object1.myFunc(3));

/* Agregação! Exercicio de FIXAÇÃO e afins */

class Friend {
    private _nickname: string | undefined;
  
    public getNickname(): string | undefined{
      return this._nickname;
    }
  
    public setNickname(nickname: string) {
      this._nickname = nickname;
    }
  }
  
  class SocialMediaAccount {
    private friends = new Array<Friend>();
  
    public addFriend(friend: Friend) {
      this.friends.push(friend);
    }
  
    public printFriends() {
      this.friends.map((friend) => console.log(friend));
    }
  }
  
  const socialMediaAccount = new SocialMediaAccount();
  
  const friendCarol = new Friend();
  friendCarol.setNickname('Carol');
  
  const friendFernando = new Friend();
  friendFernando.setNickname('Fernando');
  
  socialMediaAccount.addFriend(friendCarol);
  socialMediaAccount.addFriend(friendFernando);
  socialMediaAccount.printFriends();