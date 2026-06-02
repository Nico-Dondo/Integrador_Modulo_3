describe('PokeAPI - Pikachu', () => {

  it('Validaciones Pikachu', () => {

    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu/')
      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.base_experience)
          .to.be.greaterThan(10)
          .and.lessThan(1000)

        const types = response.body.types.map(t => t.type.name)

        expect(types).to.include('electric')

      })

  })

})