/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Homepage navigation', () => {
    it('Should have homepage title', () => {
        cy.visit('http://localhost:3000')

        cy.get('h3').contains('GotPop Shop')
    })

    it('Should scroll to the first panel when hero button is clicked', () => {
        cy.visit('http://localhost:3000')
        
        cy.get('.LinkIcon_link__1TjqX').click({ force: true })
        cy.contains('@container queries')
    })

    it('Scroll to the bottom and find 3 links', () => {
        cy.visit('http://localhost:3000')
        cy.scrollTo('bottom')

        cy.contains('Local')
        cy.contains('GitHub')
        cy.contains('Live')
    })
})

export { }