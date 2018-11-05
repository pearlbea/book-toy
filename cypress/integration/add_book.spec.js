describe("new book form", () => {
  it("can add a book", () => {
    cy.visit("/new")
      .get("#title-input")
      .type("A book title")
      .get("#author-first-input")
      .type("Jane")
      .get("#author-last-input")
      .type("Doe")
      .get("#new-book-submit")
      .click();

    cy.url()
      .should("equal", "http://localhost:3000/")
      .get(".MuiGridListTileBar-title-145")
      .first()
      .should("have.text", "A book title");
  });
});
