describe("book deletion", () => {
  it("can remove a book", () => {
    cy.visit("/")
      .get(".info-button")
      .first()
      .click()
      .get("h2")
      .should("have.text", "Effective JavaScript")
      .get(".MuiButtonBase-root-62")
      .last()
      .click();
    cy.url()
      .should("equal", "http://localhost:3000/")
      .get(".MuiGridListTileBar-title-124")
      .first()
      .should("not.have.text", "Effective JavaScript");
  });
});
