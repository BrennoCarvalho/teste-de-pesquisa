// acoes de interacao com a pagina
 // acoes
 // acessar o site 
// pesquisar "carros"

const el = require('./elements').ELEMENTS;

class pesquisa {
    acessarpesquisa(){
        cy.visit('https://www.mercadolivre.com.br/');
    }
    fazerpesquisa(){
        cy.get(el.id).type('carros');
        cy.get(el.pesquisavalida).click();
    }
}

export default new pesquisa();