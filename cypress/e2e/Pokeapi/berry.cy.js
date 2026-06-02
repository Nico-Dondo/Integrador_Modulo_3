describe('PokeAPI - Berry Tests', () => {

  it('Berry 1 validations', () => {

    cy.request('https://pokeapi.co/api/v2/berry/1')
      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.size).to.eq(20)

        expect(response.body.soil_dryness).to.eq(15)

        expect(response.body.firmness.name).to.eq('soft')

      })

  })

})