describe('On the homepage and navigating to other pages', () => {
  
  it('On the homepage click upload, load the page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.btn').contains('Upload')
      .click();
  });

  it('On the login page, click on the upload button', () => {
    cy.visit('http://localhost:3000/upload/login')
    cy.get('.button-text')
    .contains('Upload')
      .click();
  });

  it('On the login page, click on the sign up button', () => {
    cy.visit('http://localhost:3000/upload/login')
    cy.get('.button-text')
    .contains('Sign Up')
      .click();
  });
})

