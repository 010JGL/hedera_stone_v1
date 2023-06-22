describe("On the Homepage and navigating to upload pages", () => {
  it("On the Homepage click upload, load the page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".btn").contains("Upload").click();
  });

  it("On the Login page, click on the upload button", () => {
    cy.visit("http://localhost:3000/upload/login");
    cy.get(".button-text").contains("Upload").click();
  });

  it("On the Login page, click on the sign up button", () => {
    cy.visit("http://localhost:3000/upload/login");
    cy.get(".button-text").contains("Sign Up").click();
  });
});

describe("On the Homepage and navigating to Nfts pages", () => {
  it("On the Homepage click browse, load the page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".btn").contains("Browse").click();
  });

  it("On the Nfts page click Search, load the page and then go back to home page", () => {
    cy.visit("http://localhost:3000/nfts");
    cy.get("[alt='HederaStone Logo']").click();
  });

  it("On the Nfts page click Search, load the page", () => {
    cy.visit("http://localhost:3000/nfts");
    cy.get(".button-text").contains("Search").click();
  });

  it("On the Nfts page click Gallery, load the page", () => {
    cy.visit("http://localhost:3000/nfts");
    cy.get(".button-text").contains("Gallery").click();
  });

  it("On the Nfts page click Collection, load the page", () => {
    cy.visit("http://localhost:3000/nfts");
    cy.get(".button-text").contains("Collection").click();
  });
});
