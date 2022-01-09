describe('verfiy the checkout functionality', () => {
    it('validate the add to cart functinality', () => {

        cy.visit('/')

        cy.fixture('example').then(function (data) {
            cy.get('.hamburger-icon > .icon-nav').click()
            cy.wait(3000)
            cy.get('.site-nav > :nth-child(2)').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .sub-menu-mobile > .site-nav-dropdown > :nth-child(3) > a > span').click()
            cy.url().should('contain', 'seasonal')
            cy.get('.grid-item').eq(4).click()
            cy.get('.qty-group > input').clear()
            cy.get('.qty-group > input').type('4')
            cy.get('.groups-btn > .checkbox-group > .title').click()
            cy.get('#product-add-to-cart').click()
            cy.get('.btn-go-to-cart').click()
            cy.contains('18').click()
            cy.get('.btn-actions > .checkbox-group > .title').click()
            cy.get('.ui-state-default').each((el) => {
                if (el.text().includes('18')) {
                    cy.wrap(el).parent('td').click()
                }
            })
        
            cy.get('.btn-actions > .btn-checkout').click()
            cy.shipping(data)





        })



    })
})