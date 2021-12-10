class signup {
    homePage(){
        return cy.get('[href="https://app.usertesting.com/users/sign_in"]')
    }
    signUpBtn(){
        return cy.get('[href="https://www.usertesting.com/plans"]')
    }
    plansUrl(){
        return cy.url()
    }
    essentialsTitle(){
        return cy.contains('h3', 'Essentials')
    }
    essentialsBtn(){
        return cy.get('[class="CTAsBtoWCTA rtcta HeaderLink PricingTBModal"]')
    }
    modalWdw(){
        return cy.get('.modal-content')
    }
    modalTitle(){
        return cy.get('.modal-title')
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
}
export default signup;