describe('Books in favorites', () => {
  beforeEach(() => {
    cy.mockBooksApi();
    cy.visit('/');
    cy.wait('@getBooks');
    cy.login();
  });

  it('adds a book to favorites', () => {
    cy.contains('Тестовая книга').should('be.visible');
    cy.contains('button', 'Add to favorite').click();
    cy.wait('@addFavorite');
    cy.contains('button', 'Delete from favorite').should('be.visible');
  });

  it('shows an added book on the Favorites page', () => {
    cy.contains('button', 'Add to favorite').click();
    cy.wait('@addFavorite');
    cy.contains('Favorites').click();
    cy.wait('@getFavorites');
    cy.contains('Тестовая книга').should('be.visible');
  });

  it('removes a book from favorites', () => {
    cy.contains('button', 'Add to favorite').click();
    cy.wait('@addFavorite');
    cy.contains('Favorites').click();
    cy.wait('@getFavorites');
    cy.contains('button', 'Delete from favorite').click();
    cy.wait('@removeFavorite');
    cy.contains('Please add some book to favorit on home page!').should('be.visible');
  });
});
