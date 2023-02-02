/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            products(): Chainable<void>
        }
    }
}

Cypress.Commands.add('products', () => {
    cy.intercept("GET", "/api/cart/clc3riz4k000spzqj2g5gh2ce", {
        fixture: "product-1.json",
    }).as("mockedProduct1")

    cy.intercept("GET", "/api/cart/clc3rj01o000ypzqj4vukpps0", {
        fixture: "product-2.json",
    }).as("mockedProduct2")

    cy.intercept("GET", "/api/cart/clc3rj0nx0014pzqj3mso1sev", {
        fixture: "product-3.json",
    }).as("mockedProduct3")

    cy.intercept("GET", "/api/cart/clc3rj19z001apzqjmvmk145x", {
        fixture: "product-4.json",
    }).as("mockedProduct4")
})

export { }