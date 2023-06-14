describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('./src/app.html')  // Replace with your application URL
        cy.fixture("users.json").as('usersData')
    })

    context('Header', () => {
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
            cy.get('@usersData').then((usersJson) => {
                let { username, password } = usersJson.users[0]

                cy.get('[data-test="username-input"]').type(username)
                cy.get('[data-test="password-input"]').type(password)
                cy.get('[data-test="submit-button"]').click().as('login')

                cy.get('#login-success-message').should('exist')
            })


        })

        it('Should fill in the login form and submit it using custom commands', () => {
            cy.get('@usersData').then((usersJson) => {
                let { username, password } = usersJson.users[0]

                cy.getByDataTestSelector('username-input').type(username)
                cy.getByDataTestSelector('password-input').type(password)
                cy.getByDataTestSelector('submit-button').click()

                cy.get('#login-success-message').should('exist')
            })
        })


    })

    context('Todo list', () => {
        beforeEach(() => {
            cy.get('@usersData').then((usersJson) => {
                let { username, password } = usersJson.users[0]
                cy.login(username, password)
            })
        })

        it('Should have a list of tasks', () => {
            cy.get('#todo-list li').should('have.length', 3)
        })
    })

    context('Tables', () => {
        beforeEach(() => {
            cy.get('@usersData').then((usersJson) => {
                let { username, password } = usersJson.users[0]
                cy.login(username, password)
            })
        })

        it('Should display user information in a table', () => {
            cy.get('#user-table')
                .find('tr')
                .should('have.length', 4)
                .eq(1)
                .find('td')
                .should('contain', 'John Doe')
        })
    })
})