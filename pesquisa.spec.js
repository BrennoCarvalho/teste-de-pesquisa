/// <reference types="cypress" />

import pesquisavalida from '../support/pages/pesquisavalida';
import pesquisainvalida from '../support/pages/pesquisainvalida';

describe('Pesquisa', () => {
    it('Efetuar uma pesquisa válida', () => {
    
        pesquisavalida.acessarpesquisa();
        pesquisavalida.fazerpesquisa();


    });
});

    // acoes
    // acessar o site 
    // pesquisar "carros"
    //elementos
    // click enter



///pesquisa inválida
      it('Efetuar uma pesquisa inválida', () => {
      
    pesquisainvalida.acessarsite();
    pesquisainvalida.efetuarpesquisa();
    
    
    });
