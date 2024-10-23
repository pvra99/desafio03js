class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}


const hero1 = new Hero('Gandalf', 300, 'mago');
hero1.atacar(); 

const hero2 = new Hero('Conan', 35, 'guerreiro');
hero2.atacar(); 

const hero3 = new Hero('Li', 28, 'monge');
hero3.atacar(); 

const hero4 = new Hero('Naruto', 16, 'ninja');
hero4.atacar();