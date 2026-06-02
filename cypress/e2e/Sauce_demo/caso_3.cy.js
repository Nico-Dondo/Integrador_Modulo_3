describe('SauceDemo - Caso 3', () => {

  it('Flujo carrito completo + compra final', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('.shopping_cart_link').click()

    cy.get('#remove-sauce-labs-backpack').click()

    cy.get('.cart_item').should('not.exist')

    cy.get('[data-test="continue-shopping"]').click()

    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 2)

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Nico')
    cy.get('[data-test="lastName"]').type('Test')
    cy.get('[data-test="postalCode"]').type('1234')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order')

  })

})