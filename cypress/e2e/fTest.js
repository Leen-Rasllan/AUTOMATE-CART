
describe('Login Test', () => {
   
    it('should log in', () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
      const username = ('Name');
      const password = ('B7474ic');
      cy.get('#loginFrm_loginname').type('username');
      cy.get('#loginFrm_password').type('password');
      cy.get('#loginFrm > fieldset > .btn').click();
  
      
    });
});

describe('cart Test', () => {
   
   


    it('iteam ', () => {



        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        const username = ('Name');
        const password = ('B7474ic');
        cy.get('#loginFrm_loginname').type('username');
        cy.get('#loginFrm_password').type('password');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.visit('https://www.automationteststore.com/');
       
        
        
        cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(1) > .thumbnail').click();
        cy.get('.cart').click();
        cy.visit('https://www.automationteststore.com/');
        cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart').click();
        cy.get('.cart').click();
        cy.visit('https://www.automationteststore.com/');
        cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(4) > .thumbnail').click();
        cy.get('.cart').click();
        

        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();

        cy.get('.maintext').should('contain','Processed')
       
      });
});



