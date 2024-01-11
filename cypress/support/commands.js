/// <reference types="Cypress" />

// Clicks on the accept button for GDPR consent banner and verifies its disappearance
Cypress.Commands.add('acceptGDPRConsent', () => {
    cy.log('Clicks on the accept button for GDPR consent banner and verifies its disappearance');
    return cy.get(`[data-localization-key="gdpr-consents.banner.accept-button"]`)
        .click()
        .should('not.exist');
});

// Retrieves an element by its data-test-id attribute
Cypress.Commands.add('getByDataTestId', (selector, ...args) => {
    return cy.get(`[data-test-id="${selector}"]`, ...args);
});

// Enters a delivery address using the specified input and selects the entered address
Cypress.Commands.add('enterDeliveryAddress', (address) => {
    cy.getByDataTestId('address-picker-input.input')
        .type(address);
    cy.contains(address)
        .type('{enter}');
});

// Verifies that the current URL pathname matches the specified value
Cypress.Commands.add('verifyURLPathname', (pathname) => {
    cy.log('Checking if the current URL pathname matches the specified value');
    cy.location("pathname")
        .should("eq", pathname);
});

// Verifies that the current URL contains the specified query
Cypress.Commands.add('verifyURLContains', (query) => {
    cy.log('Checking if the current URL contains the specified query');
    cy.url()
        .should("contain", query);
});

// Clicks on a navigation link with the specified link text
Cypress.Commands.add('clickNavigationLink', (linkText) => {
    cy.get('.llwORD').contains(linkText).click();
});

// Verifies that the current page title contains the specified value
Cypress.Commands.add('verifyPageTitle', (title) => {
    cy.log('Checking if the current page title contains the specified value');
    cy.title().should('contain', title);
});

// Clicks on a food category with the specified category name
Cypress.Commands.add('clickFoodCategory', (categoryName) => {
    cy.contains(categoryName).click();
});

// Clicks on the first restaurant card
Cypress.Commands.add('clickFirstRestaurantCard', (index) => {
    cy.get('[data-test-id^="venueCard"]').eq(index).click();
});

// Clicks on a burger from the menu, aliasing it as 'selectedBurger'
Cypress.Commands.add('selectBurgerFromMenu', (index) => {
    cy.getByDataTestId('horizontal-item-card')
        .contains('Burger')
        .eq(index)
        .as('selectedBurger')
        .click();
});

// Verifies the visibility of the product modal
Cypress.Commands.add('verifyProductModalVisibility', () => {
    cy.log('Checking if the product modal is visible');
    cy.getByDataTestId('product-modal').should('be.visible');
});

// Clicks on the 'Add to order' button, verifies the disappearance of the product modal,
// and checks that in the top right corner of the selected burger card, the number '1' appears.
Cypress.Commands.add('addBurgerToOrder', () => {
    cy.contains('Add to order').click();
    cy.log('Checking if the product modal dissapears ' +
        'and that the number 1 appears in the top right corner of the selected burger card');
    cy.getByDataTestId('product-modal').should('not.exist');
    cy.getByDataTestId('horizontal-item-card-stepperValue')
        .should('exist')
        .and("have.text", '1');
});

// Retrieves and stores menu burger details, such as price and name
Cypress.Commands.add('retrieveAndStoreMenuBurgerDetails', ({ alias }) => {
    cy.get(alias)
        .find('[data-test-id="horizontal-item-card-price"], ' +
            '[data-test-id="horizontal-item-card-discounted-price"]')
        .invoke('text')
        .as('menuBurgerPrice');
    cy.get(alias)
        .find('[data-test-id="horizontal-item-card-header"]')
        .invoke('text')
        .as('menuBurgerName');
});

// Retrieves and stores cart burger details, such as name and price
Cypress.Commands.add('retrieveAndStoreCartBurgerDetails', () => {
    cy.getByDataTestId('CartItemName').invoke('text').as('cartBurgerName');
    cy.getByDataTestId('CartItem').invoke('text').as('cartBurgerPrice');
});

// Verifies that the selected burger price and name match the corresponding details in the cart
Cypress.Commands.add('verifyTheSelectedBurgerIsAddedToTheCart',
    ({ menuBurgerName, cartBurgerName, menuBurgerPrice, cartBurgerPrice }) => {
    cy.get(menuBurgerName).then((menuBurgerName) => {
        cy.get(cartBurgerName)
            .should('include', menuBurgerName, 'Menu burger name should match cart burger name');
    });

    cy.get(menuBurgerPrice).then((menuBurgerPrice) => {
        cy.get(cartBurgerPrice)
            .should('include', menuBurgerPrice, 'Cart burger price should match menu burger price');
    });
});