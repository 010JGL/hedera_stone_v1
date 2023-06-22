describe('On the login page', () => {
 
  it('On the login page, enter values and log in', () => {
  cy.visit('http://localhost:3000/upload/login')
  cy.get('#formBasicEmail')
    .type('jay@cool.slm')
  cy.get('#formBasicPassword')
    .type('hello123')
  cy.get('.btn')
    .click()
  });

})

describe('On the Sign Up page', () => { 

  it('On the Sign up page, enter values and Sign up', () => {
    cy.visit('http://localhost:3000/upload/signup')
    cy.get('#formBasicUsername')
      .type('jaycool7')
    cy.get('#formBasicName')
      .type('Jay Cool')
    cy.get('#formBasicEmail')
      .type('jay7@cool.slm')
    cy.get('#formBasicPassword')
      .type('hello123')
    cy.get('.btn')
      .click()
  });
})