describe('Cypress Test Suite', () => {
  beforeEach(() => {
    cy.visit('./src/app.html')  // Replace with your application URL
  })

  context('header', () => {
    it('Should have a title', () => {
      cy.title().should('contain', 'Cypress Test Page')
    })

    it('Should display the correct heading', () => {
      cy.get('h1').should('have.text', 'Cypress Test Page')
    })

    it('Should display a welcome message', () => {
      cy.get('#message p').should('have.text', 'Welcome to the Cypress test page!')
      cy.get('.welcome-message p').should('have.text', 'Welcome to the Cypress test page!')
    })
  })

  context('Login form', () => {
    it('Should fill in the login form and submit it', () => {
      cy.get('[data-test="username-input"]').type('john_doe')
      cy.get('[data-test="password-input"]').type('password123')
      cy.get('[data-test="submit-button"]').click()

      // .get('#login-form').submit()
    })

    it('Should fill in the login form and submit it using custom commands', () => {
      cy.getByDataTestSelector('username-input').type('john_doe')
      cy.getByDataTestSelector('password-input').type('password123')
      cy.getByDataTestSelector('submit-button').click()
    })
  })

  context('Todo list', () => {
    it('Should have a list of tasks', () => {
      cy.get('#todo-list li').should('have.length', 3)
    })
  })

  context('User table', () => {
    it('Should display user information in a table', () => {
      cy.get('#user-table')
          .find('tr')
          .should('have.length', 3)
          .eq(1)
          .find('td')
          .should('contain', 'John Doe')
    })
  })

  // Add more Cypress test cases here

})