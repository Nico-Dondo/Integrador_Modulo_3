describe('SauceDemo - Caso 1', () => {

  it('Login y orden con pausas visibles', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.wait(1000)

    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(500)

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(500)

    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)

    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.wait(1500)

    let precios = []

    cy.get('.inventory_item_price')
      .each(($el) => {
        precios.push(parseFloat($el.text().replace('$', '')))
      })
      .then(() => {

        cy.wait(1000)

        const ordenados = [...precios].sort((a, b) => a - b)

        expect(precios).to.deep.equal(ordenados)

      })

  })

})