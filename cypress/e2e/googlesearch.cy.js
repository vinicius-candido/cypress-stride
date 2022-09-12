describe('Google Search - Stride Health test', () => {
    before(() => {
        cy.visit('https://www.google.com/');
    })

    it('Search for something', () => {
        cy.get('[class="gLFyf gsfi"]').type('Stride Health{enter}');
    })

    it('Retrieve first 10 results', () => {
        let i = 0;
        cy.get('[class="LC20lb MBeuO DKV0Md"]')
            .each(($element, index) => {
                if (i < 10) {
                    cy.log(`RESULT No ${i+1}: `+ $element.text());
                    i++;
                }
        })
        
    })
});