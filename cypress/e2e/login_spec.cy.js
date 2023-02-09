describe('Login spec', () => {
  it('Login página', () => {
    cy.visit(Cypress.env('url'));
    cy.get('#username').type(Cypress.env('USER'));
    cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    assert('')
    cy.screenshot('Capturing the screenshot after successful login');
  })
})