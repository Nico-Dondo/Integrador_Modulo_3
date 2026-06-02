describe('SauceDemo - Caso 2', () => {
  it('Flujo carrito + validaciones checkout', () => {
    
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('.inventory_item button').each(($btn) => {
      cy.wrap($btn).click()
    })

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 6)

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Nico')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Last Name is required')

    cy.get('[data-test="lastName"]').type('Test')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Postal Code is required')
  })
})