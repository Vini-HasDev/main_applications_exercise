interface Contract {
    assunto: string;
    clausulas: string[];
    assinaturas: Person[];
    describe(): void;
}

class Person {
    private _name;
    constructor(name: string) {
        this._name = name;
    };
    get name() { return this._name; }
}

class NaturalPerson extends Person {
    private _cpf;
    constructor(name: string, cpf: string) {
        super(name);
        this._cpf = cpf;
    }

    get cpf() { return this._cpf; }
}

class LegalPerson extends Person {
    private _cnpj;
    constructor(name: string, cnpj: string) {
        super(name);
        this._cnpj = cnpj;
    }
}

class ContratoVenda implements Contract {
    private _assinaturas: Person[];
    private _clausulas: string[];

    constructor() {
        this._assinaturas = [];
        this._clausulas = [];
    }

    get assinaturas() { return [...this._assinaturas]; }
    get clausulas() { return [...this._clausulas]; }
    get assunto() { return "Sales"; }

    sign(signatory: Person) { this._assinaturas.push(signatory) };
    addClause(clause: string) {
        if (this._assinaturas.length > 0) return;
        this._clausulas.push(clause);
    }

    describe() {
        console.log('----------------------')
        console.log(`Contrato: ${this.assunto}`);
        this.clausulas.forEach((clause) => { console.log(`Cláusula: ${clause} `) });
        this.assinaturas.forEach((signatury) => { console.log(`Assinado por: ${signatury.name}`) });
        console.log('----------------------\n')
    }
}

const s1 = new ContratoVenda();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '12345648944651');

s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();