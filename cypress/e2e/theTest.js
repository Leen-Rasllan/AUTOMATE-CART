
Cypress.Commands.add('login', () => {
    const username = 'Name';
    const password = 'B7474ic';
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get('#loginFrm > fieldset > .btn').click();
});

describe('Cart Test', () => {
    before(() => {
   
        cy.login();
    });

    it('should add multiple items to the cart and proceed to checkout', () => {
        
        cy.visit('https://www.automationteststore.com/');

        const itemsToAdd = [
            '#block_frame_special_1772 > .thumbnails > :nth-child(1) > .thumbnail',
            '#block_frame_special_1772 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart',
            '#block_frame_special_1772 > .thumbnails > :nth-child(4) > .thumbnail'
        ];

       
        cy.wrap(itemsToAdd).each((itemSelector) => {
            cy.get(itemSelector).click();
            cy.get('.cart').click();
            cy.visit('https://www.automationteststore.com/');
        });

       
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();

       
        cy.get('span.maintext').should('be.visible');
    });
});
