// cypress/e2e/login.cy.js
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });
});