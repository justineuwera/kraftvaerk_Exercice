
/// <reference types = "Cypress" />


class GooglePage {

  // Locators

  accCookiesBtn="[id=L2AGLb]";
  txtSearch="[id=APjFqb]";
  searchResult="#search a";



 // Click on accept cookies

  acceptCookies(){

	 cy.get(this.accCookiesBtn).click({force: true});

    }



// Search on Google

   setSearch(Searchname){

	 cy.get(this.txtSearch).type(Searchname);

	}

    clickSearchButton(){
      cy.get('form').submit();
      cy.wait(8000)
    }

// Get Result and assert the first result 

  firstResult(){
    cy.get(this.searchResult)
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.include('https://kraftvaerk.com')
    })

  }


}

export default GooglePage;