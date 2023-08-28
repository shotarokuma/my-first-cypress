context('Next.js test', () => {
  it('should access localhost', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1')
      .should('have.text', 'Welcome to Next.js!')
  });
});

describe("My First Test", () => {
  it("Match!", () => {
    expect(true).to.equal(true);
  });
  it("Does not match!", () => {
    expect(true).to.equal(false);
  });
});

