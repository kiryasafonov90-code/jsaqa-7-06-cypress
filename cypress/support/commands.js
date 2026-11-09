Cypress.Commands.add('login', (email = 'test@test.com', password = 'test') => {
  cy.contains('button', 'Log in').click();
  cy.get('#mail').should('be.visible').type(email);
  cy.get('#pass').should('be.visible').type(password);
  cy.contains('button', 'Submit').click();
  cy.contains(`Добро пожаловать ${email}`).should('be.visible');
});

Cypress.Commands.add('mockBooksApi', () => {
  const book = {
    title: 'Тестовая книга',
    description: 'Книга для проверки избранного',
    fileCover: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
    fileBook: 'test-book.pdf',
    authors: 'Автор теста',
    key: 'cypress-book-1',
    favorite: '',
  };

  let favorite = false;

  cy.intercept('GET', '**/api/books', (request) => {
    request.reply({ statusCode: 200, body: [{ ...book, favorite: favorite ? 'true' : '' }] });
  }).as('getBooks');

  cy.intercept('GET', '**/api/favotites/books', (request) => {
    request.reply({
      statusCode: 200,
      body: favorite ? [{ ...book, favorite: 'true' }] : [],
    });
  }).as('getFavorites');

  cy.intercept('POST', '**/api/favorites/books/cypress-book-1', (request) => {
    favorite = true;
    request.reply({ statusCode: 200, body: 'ok' });
  }).as('addFavorite');

  cy.intercept('DELETE', '**/api/favorites/books/cypress-book-1', (request) => {
    favorite = false;
    request.reply({ statusCode: 200, body: 'ok' });
  }).as('removeFavorite');
});
