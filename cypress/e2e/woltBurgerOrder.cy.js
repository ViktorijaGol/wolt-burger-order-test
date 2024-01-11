// Test suite for ordering a burger on Wolt.com
describe('Successful burger order on Wolt.com', () => {

  // Before each test case, set up the environment
  beforeEach(() => {
    // Visit Wolt.com and accept GDPR consent
    cy.visit('https://wolt.com/en/ltu');
    cy.acceptGDPRConsent();
  });

  // Test case: User can order a burger to his office at Kauno Dokas
  it('User can order burger to his office at Kauno Dokas on Wolt.com', () => {
    // Step 1: Ensure 'Enter delivery address' is visible
    cy.log('Checking if "Enter delivery address" is visible');
    cy.contains('Enter delivery address').should('be.visible');
    // Step 2: Enter delivery address as 'Kauno Dokas'
    cy.enterDeliveryAddress('Kauno Dokas');
    // Step 3: Verify the URL pathname is '/en/discovery'
    cy.verifyURLPathname("/en/discovery");
    // Step 4: Verify the selected address is 'Jonavos gatvė 7'
    cy.log('Checking if the selected address is Jonavos gatvė 7');
    cy.getByDataTestId('header.address-select-button.address-text')
        .should('contain', 'Jonavos gatvė 7');

    // Step 5: Click on 'Restaurants' in the navigation
    cy.clickNavigationLink('Restaurants');
    // Step 6: Verify the URL pathname is '/en/discovery/restaurants'
    cy.verifyURLPathname("/en/discovery/restaurants");
    // Step 7: Verify the 'Restaurants' is selected
    cy.log('Checking if "Restaurants" is selected');
    cy.contains('Restaurants').should('have.attr', 'aria-selected', 'true');
    // Step 8: Verify the page title contains 'Restaurants near me'
    cy.verifyPageTitle('Restaurants near me');

    // Step 9: Click on 'Burger' to view restaurants offering burger options
    cy.clickFoodCategory('Burger');
    // Step 10: Verify the URL pathname is '/en/discovery/category/burgers'
    cy.verifyURLPathname("/en/discovery/category/burgers");
    // Step 11: Verify the page title contains 'Burger near me'
    cy.verifyPageTitle('Burger near me');

    // Step 12: Click on the first restaurant card to explore menu options
    cy.clickFirstRestaurantCard(0);
    // Step 13: Select the first burger from the menu and alias it as 'selectedBurger', then click on it
    cy.selectBurgerFromMenu(0);
    // Step 14: Verify that the product modal is visible after selecting a burger
    cy.verifyProductModalVisibility();
    // Step 15: Add the selected burger to the order by clicking "Add to order" button
    cy.addBurgerToOrder();

    // Step 16: Retrieve and store the name and the price of the selected burger from the menu
    cy.retrieveAndStoreMenuBurgerDetails({ alias: '@selectedBurger' });

    // Step 17: Click on 'View order' to navigate to the order summary
    cy.contains('View order').click();
    // Step 18: Verify that the 'Your order' section is visible on the page
    cy.log('Checking if "Your order" is visible');
    cy.contains('Your order').should('be.visible');
    // Step 19: Verify that the URL contains 'cart=open' when viewing the order
    cy.verifyURLContains("cart=open");

    // Step 20: Retrieve and store the name and the price of the burger in the cart
    cy.retrieveAndStoreCartBurgerDetails();
    // Step 21: Verify that the name and the price of the selected burger in the menu matches the one in the cart
    cy.verifyTheSelectedBurgerIsAddedToTheCart({
      menuBurgerName: '@menuBurgerName',
      cartBurgerName: '@cartBurgerName',
      menuBurgerPrice: '@menuBurgerPrice',
      cartBurgerPrice: '@cartBurgerPrice'
    });

    // Step 21: Click on 'Go to checkout' to proceed to the checkout process
    cy.contains('Go to checkout').click();
    // Step 22: Verify that 'Create an account or log in' is visible on the page
    cy.log('Checking if "Create an account or log in" is visible');
    cy.getByDataTestId('MethodSelect.Title').should('contain', 'Create an account or log in');
  });
});