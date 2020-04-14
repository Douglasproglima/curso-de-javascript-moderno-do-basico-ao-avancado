//PROTOTYPES -> HERANÇA?

//Modelos -> Grupo, Empresas, Filiais e Franquiados
function GroupEnterprise(id_group, descriptionGroup, active){
    this.id_group = id_group;
    this.descriptionGroup = descriptionGroup;
    this.active = active;
}
function Companies(id_group, id_company, descriptionCompany, active){
    this.id_group = id_group; 
    this.id_company = id_company;
    this.descriptionCompany = descriptionCompany; 
    this.active = active;
}
function Braches(id_company, id_branch, descriptionBranch, active){
    this.id_company = id_company; 
    this.id_branch = id_branch;
    this.descriptionBranch = descriptionBranch; 
    this.active = active;
}
function Affiables(id_branch, id_affiable, descriptionAffiable, active){
    this.id_branch = id_branch; 
    this.id_affiable = id_affiable;
    this.descriptionAffiable = descriptionAffiable; 
    this.active = active;
}

//Instância dos Objetos
const groupEnterprise = new GroupEnterprise(1, 'Group ProgLima World', true);

//#region Empresas/Filiais e Franqueados dos Estados Unidos
const companyEUA = new Companies(1, 1, 'Proglima USA');
const branchNewYork = new Braches(1, 1, 'Filial de Nova York', true);
const affiliableBrooklyn = new Affiables(1, 1, 'Franqueado do Brooklyn', true);
const affiliableQueens = new Affiables(1, 2, 'Franqueado do Brooklyn', true);
const branchSouthCarolina = new Braches(1, 2, 'Filial da Carolina do Sul', true);
//#endregion

//#region Empresas/Filiais e Franqueados do Brasil
const companyBrazil = new Companies(1, 2, 'Proglima Brasil', true);
const branchRio = new Braches(2, 3, 'Filial do Rio de Janeiro', true);
const branchSP = new Braches(2, 3, 'Filial de São Paulo', true);
const branchMG = new Braches(2, 4, 'Filial de Minas Gerais', true);
const affiliableUberlandia = new Affiables(4, 1, 'Franqueado de Uberlandia', false);
//const affiliableContagem = new Affiables(4, 2, 'Franqueado de Contagem', true);

//FORMA DIFERENTE DE CRIAR O OBJETO E JA SETAR O PROTOTYPE
const affiliableContagem = Object.create(Braches.prototype, {
    id_branch: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 4
    },
    id_affiable: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 2
    }, 
    descriptionAffiable: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Franqueado de Contagem'
    }, 
    active: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: true
    }
}); 

//new Affiables(4, 2, 'Franqueado de Contagem', true);
//#endregion

//#region Relacionamento Entre as Entidades
Object.setPrototypeOf(companyEUA, groupEnterprise);
Object.setPrototypeOf(branchNewYork, companyEUA);
Object.setPrototypeOf(affiliableBrooklyn, branchNewYork);
Object.setPrototypeOf(affiliableQueens, branchNewYork);
Object.setPrototypeOf(branchSouthCarolina, companyEUA);

Object.setPrototypeOf(companyBrazil, groupEnterprise);
Object.setPrototypeOf(branchRio, companyBrazil);
Object.setPrototypeOf(branchSP, companyBrazil);
Object.setPrototypeOf(branchMG, companyBrazil);
Object.setPrototypeOf(affiliableUberlandia, branchMG);
Object.setPrototypeOf(affiliableContagem, branchMG);
//#endregion