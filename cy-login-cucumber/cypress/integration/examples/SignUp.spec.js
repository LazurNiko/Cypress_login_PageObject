import signup from './PO/SignUp'
Cypress.on('uncaught:exception', (err, runnable) => {
})

describe('Sign Up', () => {
    const userSignUp = new signup();
    let user;

    before(()=> {
        cy.task('newUser').then((newUser) => {
            user = newUser;
        });
    });

    it('User should be able to registrate new account', () => {
        cy.visit('/');
        userSignUp.homePage().contains('Log IN').click();
        userSignUp.signUpBtn().contains('Sugn UP').click();
        userSignUp.plansUrl().should('include', '/plans');
        userSignUp.essentialsTitle().should('contain', 'ESSENTIALS');
        userSignUp.essentialsBtn().click();
        userSignUp.modalWdw().should('be.visible');
        userSignUp.modalTitle().should('exist');
        userSignUp.firstName().type(user.userFirstname);
        userSignUp.lastName().type(user.userLastname);
        userSignUp.jobTitle().type(user.userJobTitle);
        userSignUp.workEmail().type(user.userEmail);
        userSignUp.phone().type('1234567');
        userSignUp.companyName().type(user.userFirstname);
        userSignUp.employesNum().select('1-10');
        userSignUp.businessUseCase().select('One time project');
        userSignUp.country().select('Canada');
        userSignUp.submitBtn().click();
    });
});
