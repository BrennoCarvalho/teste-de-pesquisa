const el = require('./elements').ELEMENTS;

class pesquisainvalida {
    acessarsite(){
        cy.visit('https://www.mercadolivre.com.br/');
    }

    efetuarpesquisa(){
        cy.get(el.efetuar).type('carro mer¨8va{enter}');
    }
}

export default new pesquisainvalida();