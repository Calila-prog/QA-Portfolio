describe('Teste de Checkout Completo', () => {
  it('Deve preencher o formulário de checkout corretamente', () => {
    // 1. Login e adicionar item ao carrinho
    cy.login('standard_user', 'secret_sauce');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // 2. Acessar o carrinho
    cy.get('.shopping_cart_link').click();
    
    // 3. Iniciar checkout
    cy.get('[data-test="checkout"]').click();
    
    // 4. Preencher formulário - SOLUÇÃO CORRIGIDA
    cy.get('[data-test="firstName"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'First Name')
      .type('joker', { delay: 50 });
    
    cy.get('[data-test="lastName"]')
      .type('Selvia', { delay: 50 });
    
    cy.get('[data-test="postalCode"]')
      .type('01000-000', { delay: 50 });
    
    // 5. Continuar
    cy.get('[data-test="continue"]').click();
    
    // Verificar se avançou para a próxima etapa
    cy.url().should('include', '/checkout-step-two.html');
  });
});