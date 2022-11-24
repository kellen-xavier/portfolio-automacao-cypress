describe('Login spec', () => {
  it('Login página', () => {
    cy.visit(Cypress.env('url')); //mover para .env
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
  })
})