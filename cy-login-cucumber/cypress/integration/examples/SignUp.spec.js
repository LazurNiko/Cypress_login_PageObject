import signup from './PO/SignUp'

describe('Sign Up', () => {
    const userSignUp = new signup();
    let user;

    before(()=> {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.task('newUser').then((newUser) => {
            user = newUser;
        });
    });

    it('User should be able to registrate new account', () => {
        cy.visit('/');
        userSignUp.homePage().should('have.attr', 'data-navigation', 'log-in').click();
        userSignUp.signUpBtn().should('contain','SIGN UP').click();
        userSignUp.plansUrl().should('include', '/plans');
        userSignUp.essentialsTitle().and('contain', 'Everything needed to get started collecting customer feedback');
        userSignUp.essentialsBtn().should('have.attr','data-plans-cta', 'Essentials|button').click({force: true});
        userSignUp.modalWdw().should('be.visible');
        userSignUp.modalTitle();
        userSignUp.firstName().click().type(user.userFirstName);
        userSignUp.lastName().type(user.userLastName);
        userSignUp.jobTitle().type(user.userJobTitle);
        userSignUp.workEmail().type(user.userEmail);
        userSignUp.phone().type('1234567');
        userSignUp.companyName().type(user.userFirstName);
        userSignUp.employesNum().select('1 - 10');
        userSignUp.businessUseCase().select('Multiple projects in my department');
        userSignUp.country().select('Belgium');
        userSignUp.checkBox().check();
        userSignUp.submitBtn().click();
        userSignUp.modalEssentialsSubmit().should('be.visible');
        userSignUp.modalMessage().should('contain', 'One of our team members will be in touch shortly.')
        userSignUp.buttonClose().click();
    });
});
