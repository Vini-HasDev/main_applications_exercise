interface Logger {
    log(param: string):void 
}

class ConsoleLogger implements Logger {
    log(param: string) {
        return console.log(param)
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string) {
        return console.log('Log2: ' + param)
    }
};

interface DataBase {
    logger: Logger;
    save(key: string, value: string): void;
}

class ExampleDataBase implements DataBase {
    constructor(public logger: Logger = new ConsoleLogger()) { }

    save(key: string, value: string) {
       this.logger.log(`Inserindo o valor: ${value} na chave: ${key}`)
    }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDataBase(logger1);
const database2 = new ExampleDataBase(logger2);
const database3 = new ExampleDataBase();

database1.save('Desenho', 'Shrek');
database2.save('Filme', 'Spider-man: No way home');
database3.save('Anime', 'Jujutsu-Kaisen');