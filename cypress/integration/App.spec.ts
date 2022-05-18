describe('App E2E', () => {
  it('should see popover', () => {
    cy.visit('/')

    cy.get('[data-test-id="test-button-left-click"]').should('have.text', 'Click me')
  })

  it('can not see the card', () => {
    cy.get('[data-test-id="pop-over-card"]').should('have.length', 0)
  })

  it('first click button/open card', () => {
    cy.get('[data-test-id="test-button-left-click"]').click()
    cy.get('[data-test-id="pop-over-card"]').should('have.length', 1)
  })

  it('second click button/close card', () => {
    cy.get('[data-test-id="test-button-left-click"]').click()
    cy.get('[data-test-id="pop-over-card"]').should('have.length', 0)
  })
})
