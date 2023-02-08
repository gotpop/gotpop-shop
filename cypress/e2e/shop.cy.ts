describe('Shop', () => {
    it('Should navigate to the shop page & add item to cart', () => {
        cy.visit('/')
        cy.products()

        cy.get('[data-test="shop"]').click()
        cy.url().should('include', 'shop')
        cy.get('h2').contains('Shop')

        cy.intercept("GET", "/api/cart/cartget", {
            fixture: "cart-get.json",
        }).as("cartget")

        cy.wait("@mockedProduct")
        cy.get('[data-cy="add-to-cart-1"]').scrollIntoView().click({ force: true })

        cy.get('[data-cy="button-cart"]').click()
        cy.wait("@cartget")

        cy.contains('HTML & JS').should('be.visible') 
        cy.contains('£10.99').should('be.visible') 
        cy.get('[data-cy="button-cart-close"]').click()
    })
})

export { }
