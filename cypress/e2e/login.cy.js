describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('logs in with valid credentials', () => {
    cy.login();
  });

  it('does not submit the login form with an empty email', () => {
    cy.contains('button', 'Log in').click();
    cy.get('#mail').type(' ');
    cy.get('#pass').type('test');
    cy.contains('button', 'Submit').click();
    cy.get('#mail').then(($input) => {
      expect($input[0].checkValidity()).to.equal(false);
    });
  });

  it('does not submit the login form with an empty password', () => {
    cy.contains('button', 'Log in').click();
    cy.get('#mail').type('test@test.com');
    cy.contains('button', 'Submit').click();
    cy.get('#pass').then(($input) => {
      expect($input[0].checkValidity()).to.equal(false);
    });
  });
});
