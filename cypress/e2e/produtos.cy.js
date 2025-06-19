describe('Testes da loja', () => {
  // ESSE CÓDIGO VAI RODAR ANTES DE CADA TESTE DENTRO DO describe()
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Verifica se a página de produtos carregou', () => {
    cy.contains('Products').should('be.visible'); // Já está logado aqui!
  });

  it('Adiciona um item ao carrinho', () => {
    cy.get('.btn_inventory').first().click(); // Clica no primeiro produto
    cy.get('.shopping_cart_badge').should('have.text', '1'); // Carrinho mostra "1"
  });
});