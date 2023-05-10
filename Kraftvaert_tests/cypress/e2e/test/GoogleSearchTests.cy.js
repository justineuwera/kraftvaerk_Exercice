

import GooglePage from "../PageObjects/GooglePage.js"
import HomePage from "../PageObjects/HomePage.js"


describe('Google Search', () => {

  const googlePage = new GooglePage();
  const homePage = new HomePage();


  let data; 
  before(() => {
    cy.fixture('example').then((fData) => {
        data = fData;
    });
  });

  it('searches for Kraftvaerk ', () => {


  //Open Google search Page

    cy.visit('/');
    googlePage.acceptCookies();

  // Search for Kraftvaerk

    googlePage.setSearch(data.searchName)
    googlePage.clickSearchButton();


  //get first search result and assert it contains Kraftvaerk link

    googlePage.firstResult();

  // Asserts it leads to the Kraftvaerk page

    homePage.validatePage();
  });

});