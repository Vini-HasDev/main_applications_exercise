class SuperClass {
    isSuper: boolean;
    
    constructor() {
        this.isSuper = true;
    };

    public sayHello():void {
        console.log('Olá, mundo!!')
    };
}

class Subclass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
};

const myFunc = (object: SuperClass) => {
   console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const sup = new SuperClass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);

// class Pessoa {
//     constructor(public _name: string, public _age: number, public _address: string, public canto: boolean ) {}

//     get age():number {
//       return this._age
//     };

//     get address():string {
//       return this._address;
//     };

//     get name():string {
//       return this._name;
//     }
// }

// class PessoaCantora extends Pessoa {
//     cantar() {
//         if (this.canto === true) {
//             console.log(`${this.name} está cantando!!`)
//         } else if (this.canto === false) {
//             console.log(`${this.name} não é um cantor!!`)
//         }
//     }
// }

// const myFunction = (person: PessoaCantora) => {
//     console.log(`
//     Nome: ${person.name}
//     Idade: ${person.age}
//     Endereço: ${person.address}`),
//     person.cantar();
// }

// const Person1 = new PessoaCantora('Vinicius', 24, 'Vicente de carvalho, 439', false);
// const Person2 = new PessoaCantora('Jéssica', 26, 'Vicente de carvalho, 439', false);
// const Person3 = new PessoaCantora('Cristiano', 24, 'Avenida Stresser, 255', true);
// myFunction(Person1);
// myFunction(Person2);
// myFunction(Person3);
