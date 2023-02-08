/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            products(): Chainable<void>
        }
    }
}

Cypress.Commands.add('products', () => {
    cy.intercept("GET", "/api/cart/**", {
        fixture: "product.json",
    }).as("mockedProduct")
})

export { }