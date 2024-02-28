describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/");
  });

  it("Display NavBar Contents", () => {
    cy.get(".navbar").should("be.visible");
    cy.get(".nav-buttons").should("be.visible");
    cy.get(".nav-buttons > :nth-child(2)").should("be.visible");
    cy.get('.nav-buttons > :nth-child(3)').should('be.visible');
    cy.get('.nav-buttons > :nth-child(4)').should('be.visible');
    cy.get('.nav-buttons > :nth-child(5)').should('be.visible');
    cy.get('.user-icon').should('be.visible');
    cy.get('.user-details').should('be.visible');
  });

  it("Successfully loads and displays the homepage and its contents", () => {
    cy.get(".navbar").should("be.visible");
    cy.get(".dashboard").should("be.visible");
    cy.get(".dashboard-section").should("be.visible");
    cy.get(".dashboard-totals-container").should("be.visible");
    cy.get(".transactions").should("be.visible");
    cy.get(".budget").should("be.visible");
    cy.get(".cashflow").should("be.visible");
    cy.get(".dashboard-totals-container > :nth-child(1)");
    cy.get(".dashboard-totals-container > :nth-child(2)");
    cy.get(".budget");
  });

  it.skip("Displays the transactions table", () => {
    cy.get(".transactions-table-container").should("be.visible");
    cy.get(".transactions-h1").should("have.text", "Transactions");
    cy.get(".transactions-searchbar-container").should("be.visible");
    cy.get(".searchbar-button").should("be.visible");
    cy.get(".transactions-tr").should("have.length", 15);
  });
});
