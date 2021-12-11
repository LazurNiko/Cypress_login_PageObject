class signup {
    homePage(){
        return cy.get('div.CTAs>a[href="https://app.usertesting.com/users/sign_in"]')
    }
    signUpBtn(){
        return cy.get('[href="https://www.usertesting.com/plans"]')
    }
    plansUrl(){
        return cy.url()
    }
    essentialsTitle(){
        return cy.get(':nth-child(1) > .each-pricing-box > .title-cta')
    }
    essentialsBtn(){
        return cy.get(':nth-child(1) > .each-pricing-box > .title-cta > .cta > .CTAsBtoWCTA')
    }
    modalWdw(){
        return cy.get('.modal-content')
    }
    modalTitle(){
        return cy.contains('.modal-title', 'ESSENTIALS')
    }
    firstName(){
        return cy.get('[placeholder="First Name"]')
    }
    lastName(){
        return cy.get('[placeholder="Last Name"]')
    }
    jobTitle(){
        return cy.get('[placeholder="Job Title"]')
    }
    workEmail(){
        return cy.get('[placeholder="Work Email"]')
    }
    phone(){
        return cy.get('[placeholder="Phone"]')
    }
    companyName(){
        return cy.get('[placeholder="Company Name"]')
    }
    employesNum(){
        return cy.get('#Number_of_Employees_Company_Size__c')
    }
    businessUseCase(){
        return cy.get('#Business_Use_Case__c')
    }
    country(){
        return cy.get('#Country')
    }
    submitBtn(){
        return cy.get('.mktoButton')
    }
    checkBox(){
        return cy.get('#Consent__c')
    }
    modalEssentialsSubmit(){
        return cy.get('.modal-content')
    }
    modalMessage(){
        return cy.get('div.success-confirmation>p')
    }
    buttonClose(){
        return cy.get('button.close')
    }
}
export default signup;