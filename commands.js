Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/')
  cy.contains('Sign In').click()
  cy.get('#email').type(email)
  cy.get('#pass').type(password)
  cy.get('[title="Sign In"]').click()
})
