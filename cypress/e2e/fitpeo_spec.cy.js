describe('FitPeo Automation Assignment', () => {

  beforeEach(() => {
    // Step 1: Navigate to the FitPeo Homepage
    cy.visit('https://www.fitpeo.com');
  });

  it('Automates the Revenue Calculator Page', () => {

    // Step 2: Navigate to Revenue Calculator Page
    cy.contains('Revenue Calculator').click({ force: true });
    cy.url().should('include', 'revenue-calculator');

    // Step 3: Scroll to the Slider Section
    cy.xpath("//input[@type='range']").scrollIntoView();
    cy.log('Scrolled to the slider section.');

    //Step 4: Adjust the Slider to 820
    cy.xpath("//input[@type='range']")
      .invoke('val', 820)
      .trigger('mousedown', { force: true })
      .trigger('mouseup', { force: true })
      .trigger('input', { force: true })
      .trigger('change', { force: true });


    cy.xpath('//*[@id=":r0:"]').clear().type('820');
    cy.xpath('//*[@id=":r0:"]').should('have.value', '820');

    //Step 5: Update Text Field to 560
    cy.xpath('//*[@id=":r0:"]').clear().type('560');
    cy.xpath('//*[@id=":r0:"]').should('have.value', '560');

    // Step 6: Select CPT Codes
    const cptCodes = ['#checkbox-99091', '#checkbox-99453', '#checkbox-99454', '#checkbox-99474'];
    cptCodes.forEach((selector) => {
      cy.xpath("//div[@class='MuiBox-root css-rfiegf']//div[1]//label[1]//span[1]//input[1]").check().should('be.checked');
      cy.xpath("//div[@class='MuiBox-root css-1p19z09']//div[2]//label[1]//span[1]//input[1]").check().should('be.checked');
      cy.xpath("//div[3]//label[1]//span[1]//input[1]").check().should('be.checked');
      cy.xpath("//div[8]//label[1]//span[1]//input[1]").check().should('be.checked');
    });


    // Step 7: Validate Total Recurring Reimbursement
    cy.xpath('//*[@id=":r0:"]').clear().type('820');
    cy.xpath("//p[normalize-space()='$110700']")
      .should('contain.text', '$110700');


  })
})