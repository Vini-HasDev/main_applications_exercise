class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo?: string;
    
    
    constructor (b: string, s: number, r: string, c: string[]) {
        console.log(`Creating Tv ${b}`);
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    };

    turnOn () {
        console.log(`The Tv ${this.brand} was tunrned ON, size: ${this.size}", resolution: ${this.resolution} and connections: ${this.connections}`);
    };

};

const Tv1 = new Tv('Samsung', 49, '1920x1080', ['HDMI, DISPLAY PORT, ETHERNET']);

Tv1.turnOn();

/* 
    Comandos necessários para instalar o ts-node:

npm init -y
npm i --save-dev typescript@4.4
npm i -D typescript@4.4
npx tsc --init
npm o --save-dev ts-node@10.9.1
npx ts-node ${nome do arquivo}.ts

    */ 