describe("First test", () => {
  it("Checks if 2 + 2 equal to 4", () => {
    expect(2 + 2).to.equal(4);
  });
});

describe("On the warning page", () => {
  it("Clear the page by clicking on visit site", () => {
    cy.visit('https://0054-104-163-183-140.ngrok-free.app')
    cy.get('button')
      .click();
  });
});

describe('On the homepage', () => {
  it('On the homepage click upload, load the page', () => {
    cy.visit('https://0054-104-163-183-140.ngrok-free.app')
    cy.get('button')
      .click();
    cy.get('.btn').contains('Upload')
      .click();
  })
})



describe('On the homepage', () => {
  it('On the homepage click upload, load the page', () => {
    cy.visit('0054-104-163-183-140.ngrok-free.app/upload/login')

  })
})
