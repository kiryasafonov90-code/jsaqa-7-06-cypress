describe('Books application', () => {
  it('opens the home page', () => {
    cy.intercept('GET', '**/api/books', { statusCode: 200, body: [] }).as('getBooks');
    cy.visit('/');
    cy.wait('@getBooks');
    cy.contains('Books list').should('be.visible');
  });
});
