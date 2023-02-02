/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Shop', () => {
    it('Should navigate to the shop page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('[data-test="shop"]').click()
        cy.url().should('include', 'shop')
        cy.get('h2').contains('Shop')
    })
})

export { }
