describe('Shop', () => {
    it('Should navigate to the shop page & add item to cart', () => {
        cy.visit('/')

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

        cy.get('[data-test="shop"]').click()
        cy.url().should('include', 'shop')
        cy.get('h2').contains('Shop')

        cy.intercept("GET", "/api/cart/cartget", {
            fixture: "cart-get.json",
        }).as("cartget")

        cy.wait("@mockedProduct1")
        cy.get('[data-cy="add-to-cart-1"]').scrollIntoView().click({ force: true })

        cy.get('[data-cy="button-cart"]').click()
        cy.wait("@cartget")

        cy.contains('HTML & JS').should('be.visible') 
        cy.contains('£10.99').should('be.visible') 
    })
})

export { }
