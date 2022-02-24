// https://docs.cypress.io/api/introduction/api.html

describe("Integral Funtionality", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:8080/ ");
    cy.wait(2000);
  });
  it("Search other word in the search-box", () => {
    cy.get("input").type("cat").type("{enter}");
    cy.wait(2000);
  });
  it("Select the last image", () => {
    cy.get(".images-container")
      .find(".container-image")
      .children("img")
      .last()
      .click();
    cy.wait(1000);
  });
  it("Unselect the last image", () => {
    cy.get(".images-container")
      .find(".container-image")
      .children("img")
      .last()
      .click();
    cy.wait(1000);
  });
});
