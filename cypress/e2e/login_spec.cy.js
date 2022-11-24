describe('Login spec', () => {
  it('Login página', () => {
    cy.visit(Cypress.env('url'));
    cy.get('#username').type(Cypress.env('user'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
  })
})