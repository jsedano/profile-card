describe('Profile Card', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('should display the correct name and title', () => {
    cy.get('profile-card')
      .shadow()
      .find('h2')
      .should('contain', 'John Doe');
    
    cy.get('profile-card')
      .shadow()
      .find('p')
      .should('contain', 'Web Developer');
  });

  it('should have the correct image', () => {
    cy.get('profile-card')
      .shadow()
      .find('img')
      .should('have.attr', 'src', 'jsedano.jpg');
  });
});
