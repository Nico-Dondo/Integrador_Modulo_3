describe('PokeAPI - Berry 2 Tests', () => {

  it('Berry 2 validations', () => {
    cy.request('https://pokeapi.co/api/v2/berry/2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.firmness.name).to.eq('super-hard')
      })

    cy.request('https://pokeapi.co/api/v2/berry/1')
      .then((response1) => {
        cy.request('https://pokeapi.co/api/v2/berry/2')
          .then((response2) => {
            expect(response2.body.size).to.be.greaterThan(response1.body.size)
            expect(response2.body.soil_dryness).to.eq(response1.body.soil_dryness)
          })
      })
  })

})