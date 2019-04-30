describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('http://localhost:8800')
    // cy.wait(100000)

    cy.contains('login')
    // Get an input, type into it and verify that the value has been updated
    cy.get('#login')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    // cy.wait(100000)
    cy.get('#clickable')
      .click()

    cy.get('#login')
      .should('have.value', 'kikoo')
  })
})
