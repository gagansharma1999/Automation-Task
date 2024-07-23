describe('Registration Flow', () => {
  it('Verify application should register a new user', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    
    // Navigate to registration page
    cy.contains('Create an Account').click()
    
    // Fill in registration details
    cy.get('#firstname').type('Gagan')
    cy.get('#lastname').type('Sharma')
    cy.get('#email_address').type('dummy@mail.com')
    cy.get('#password').type('P@ssw0rd')
    cy.get('#password-confirmation').type('P@ssw0rd')
    
    // Submit registration form
    cy.get('[title="Register"]').click()
    
    // Verify registration success message
    cy.contains('Thank you for registering with Main Website Store.')
  })
})
