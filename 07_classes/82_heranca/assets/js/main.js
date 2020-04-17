class GroupCompany{
    constructor(idGroup, name){
        this.idGroup = idGroup;
        this.name = name;
        this.active = false;
    }

    habilit() {
        if(this.active){
            console.log(this.name + ' já está ativa.');
            return;
        }

        this.active = true;
    }
    desabilit() {
        if(!this.active){
            console.log(this.name + ' não ativa.');
            return;
        }

        this.active = false;
    }

    getInfo(){
        const active = this.active ? 'Sim' : 'Não';
        console.log(`Grupo: ${this.name} | Ativo: ${active}`);
        console.log('');
    }
}

class Company extends GroupCompany {
    constructor(idCompany, idGroup, name, email){
        super(idGroup, name);
        
        this.idCompany = idCompany;
        this.email = email;
    }

    getInfo(){
        console.log(`Empresa: ${this.name} | E-mail: ${this.email}`);
        console.log('');
    }
}

class Braches extends Company {
    constructor(idBrach, idCompany, name, email, contato){
        super(idCompany, name, email);
        this.idBrach = idBrach;
        this.contato = contato;
        this.active = false;
    }

    getInfo(){
        const active = this.active ? 'Sim' : 'Não';
        console.log(`Filial: ${this.name} | Email: ${this.email} | Contato: ${this.contato} | Ativo: ${active} `);
        console.log('');
    }
}

class Affiliates extends Braches{
    constructor(idAffiliate, idBrach, name, email, contato, logo){
        super(idBrach, name, email, contato);
        this.idAffiliate = idAffiliate;
        this.logo = logo;
    }

    getLogo(){
        return this.logo;
    }

    getInfo(){
        const logo = this.getLogo();
        console.log(`Franquia: ${this.name} | e-mail: ${this.email} | contato: ${this.contato} | Logo: ${logo}`);
        console.log('');
    }
}

const groupProglima = new GroupCompany(1, 'Grupo Proglima');
groupProglima.habilit();
groupProglima.getInfo();

const proglimaEua = new Company(1, 1, 'Proglima USA LTDA', 'contato@proglimausa.com');
proglimaEua.getInfo();

const proglimaBr = new Company(2, 1, 'Proglima Brazil LTDA', 'contato@proglimabr.com');
proglimaBr.getInfo();

const proglimaMG = new Braches(1, 2, '', '', 'Felipe');
proglimaMG.name = 'Proglima MG';
proglimaMG.email = 'contato@proglimamg.com';
proglimaMG.habilit();
proglimaMG.getInfo();

const proglimaBH = new Affiliates(1, 1, '', '', '', 'https://abrilexame.files.wordpress.com/2017/08/new-youtube-logo-840x402.jpg');
proglimaBH.name = 'Proglima BH';
proglimaBH.email = 'contato@proglimabrBH.com';
proglimaBH.contato = 'Augusto';
proglimaBH.getInfo();