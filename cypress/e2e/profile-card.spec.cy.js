describe('Profile Card', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('should display the correct name and title', () => {
    cy.get('profile-card')
      .shadow()
      .find('h2')
      .should('contain', 'Juan Sedano');
    
    cy.get('profile-card')
      .shadow()
      .find('p')
      .should('contain', 'Developer');
  });

  it('should have the correct image', () => {
    cy.get('profile-card')
      .shadow()
      .find('img')
      .should('have.attr', 'src', 'jsedano.jpg');
  });

  it('should have the correct background image for LinkedIn', () => {
    cy.get('profile-card')
        .shadow()
        .find('ul')
        .find('li')
        .first()
        .should('have.css', 'background-image')
        .and('include', 'images/LinkedIN_black_small.png');
  });

  it('should have the correct background image for Github', () => {
    cy.get('profile-card')
        .shadow()
        .find('ul')
        .find('li')
        .last()
        .should('have.css', 'background-image')
        .and('include', 'images/Github_black_small.png');
  });


});
