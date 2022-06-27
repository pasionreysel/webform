describe("Testing API Endpoints Using Cypress", () => {

    it("Test Get Request", () => {
        cy.request({
            method: 'Get',
            url: 'https://cat-fact.herokuapp.com/facts/58e008800aac31001185ed07',
     }).then((response) => {
        expect(response.body)
        console.log(response)
    })
  })
})