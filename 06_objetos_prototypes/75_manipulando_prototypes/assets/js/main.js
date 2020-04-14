//PROTOTYPES -> HERANÇA?

//Modelos -> Grupo, Empresas, Filiais e Franquiados
function GroupEnterprise(id_group, descriptionGroup, active){
    this.id_group = id_group;
    this.descriptionGroup = descriptionGroup;
    this.active = active;
}
function Companies(id_company, descriptionCompany, active){
    this.id_company = id_company;
    this.descriptionCompany = descriptionCompany; 
    this.active = active;
    GroupEnterprise.call(this, {});
}
Companies.prototype = Object.create(GroupEnterprise);
Companies.prototype.constructor = Companies;
function Braches(id_branch, descriptionBranch, active){
    this.id_branch = id_branch;
    this.descriptionBranch = descriptionBranch; 
    this.active = active;
}
Braches.prototype = Object.create(Companies); 
Braches.prototype.constructor = Braches;
function Affiables(id_affiable, descriptionAffiable, active){
    this.id_affiable = id_affiable;
    this.descriptionAffiable = descriptionAffiable; 
    this.active = active;
}
Affiables.prototype = Object.create(Braches);
Affiables.prototype.constructor = Affiables;

//Instância dos Objetos
const groupEnterprise = new GroupEnterprise(1, 'Group ProgLima World', true);

//#region Empresas/Filiais e Franqueados dos Estados Unidos
const companyEUA = new Companies(1, 'Proglima USA', true);
const branchNewYork = new Braches(1, 'Filial de Nova York', true);
const affiliableBrooklyn = new Affiables(1, 'Franqueado do Brooklyn', true);
const affiliableQueens = new Affiables(2, 'Franqueado do Brooklyn', true);
const branchSouthCarolina = new Braches(2, 'Filial da Carolina do Sul', true);
//#endregion

//#region Empresas/Filiais e Franqueados do Brasil
//const companyBrazil = new Companies(1, 2, 'Proglima Brasil', true);
//const companyBrazil = new Companies(groupEnterprise.id_group, groupEnterprise.descriptionGroup, groupEnterprise.active);
const companyBrazil = new Companies();
companyBrazil.id_company = 2;
companyBrazil.descriptionCompany = 'Proglima Brasil';
companyBrazil.active = true;

const branchRio = new Braches(3, 'Filial do Rio de Janeiro', true);
const branchSP = new Braches(4, 'Filial de São Paulo', true);
const branchMG = new Braches(5, 'Filial de Minas Gerais', true);
const affiliableUberlandia = new Affiables(3, 'Franqueado de Uberlandia', false);
const affiliableContagem = new Affiables(4, 'Franqueado de Contagem', true);
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