describe('Verify the Login Flow', () => {
  it('Application should log in with registered user', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    
    // Navigate to login page
    cy.contains('Sign In').click()
    
    // Fill in login details
    cy.get('#email').type('dummy@mail.com')
    cy.get('#pass').type('P@ssw0rd')
    
    // Submit login form
    cy.get('[title="Sign In"]').click()
    
    // Verify successful login
    cy.contains('Account Dashboard')
  })
})
