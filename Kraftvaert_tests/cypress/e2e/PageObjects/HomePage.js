

class HomePage{

  validatePage(){
    cy.get('#search a') 
      .first()  
      .click()
      .invoke('attr', 'href')
      .then((href) => {
         cy.origin('https://kraftvaerk.com', () => {
           Cypress.on('uncaught:exception', (err, runnable) => {
             return false

           })
          cy.url()
            .should('include', "kraftvaerk.com")
          cy.get('h1')
            .should('have.text', 'We’ve been digitalising the future since 2004\n')
        })
      })

    }

}


export default HomePage; 