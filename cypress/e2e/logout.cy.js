describe('Teste de logout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Deve deslogar o usuário', () => {
    cy.get('#react-burger-menu-btn').click(); // Abre menu
    cy.contains('Logout').click();
    cy.url().should('eq', 'https://www.saucedemo.com/'); // Volta para login
  });
});