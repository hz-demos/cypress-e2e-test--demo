describe("Login to compass", () => {
  it("Test config", () => {
    expect(Cypress.env("username")).to.be.a("string");
  });

  it("Visit the compass homepage", () => {
    cy.visit("https://www.compass.com/");

    cy.contains("Register/Sign In").click();
    cy.contains("Other").click();

    cy.get('input[name="email"]').type(Cypress.env("username"));
    cy.get("#continue").click();

    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get("#continue").click();

    cy.get('[data-tn="ucCorpNav-link-agentPlatform"]').click();
    cy.url().should("include", "/app/home/");
  });
});
