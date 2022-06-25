/// <reference types="cypress" />

describe("Test WebForm", () => {
    beforeEach(() => {
        cy.visit("https://josephyap9.wixsite.com/qaetestsite")
    })

    const data = {
        name: "reysel",
        email: "reysel@gmail.com",
        position: "QAE",
        phone: "09195091849",
        dateAvailability: "2022-06-27",
        expectedSalary: "40000",

    }

    it("Verify if user can submit the form", () => {
        cy.contains("TESTING FORM").should("have.text", "TESTING FORM")
        cy.get("#comp-l46hci9a").within(function() {

            cy.contains("Name").should("have.text", "Name")
            cy.get('#input_comp-l46hci9f1').type(data.name).should("have.value", data.name)

            cy.contains("Email").should("have.text", "Email")
            cy.get('#input_comp-l46hci9k2').type(data.email).should("have.value", data.email)

            cy.contains("Desired Position").should("have.text", "Desired Position")
            cy.get('#collection_comp-l46hci9n').select(data.position).should("have.value", data.position)

            cy.contains("Phone").should("have.text", "Phone")
            cy.get('#input_comp-l46hci9w').type(data.phone).should("have.value", data.phone)

            // cy.contains("Date Of Availability").should("have.text", "Date Of Availability")
            // cy.get('.TUQC6').type(data.dateAvailability)

            cy.contains("Expected Salary").should("have.text", "Expected Salary")
            cy.get('#input_comp-l46hcia3').type(data.expectedSalary).should("have.value", data.expectedSalary)

            cy.contains("Years of Experience").should("have.text", "Years of Experience")
            cy.get(':nth-child(2) > ._1iHqk').click()

            cy.contains("Skills").should("have.text", "Skills")
            cy.contains("Manual Testing").should("have.text", "Manual Testing").click()
            cy.contains("API Testing").should("have.text", "API Testing").click()
            cy.contains("Automated Testing").should("have.text", "Automated Testing").click()
            cy.get('#comp-l46hciac1 > .x6FDj').should("have.text", "I have answered the above questions to the best of my availability").click()
            
            cy.wait(10000) // for recaptcha slow loading
            cy.get('iframe')
            .first()
            .then((recaptchaIframe) => {
              const body = recaptchaIframe.contents()
              cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
            })
        })
    })

    it.only("Verify if user can submit the form without filling the required fields", () => {
        cy.contains("TESTING FORM").should("have.text", "TESTING FORM")
        cy.get("#comp-l46hci9a").within(function() {

            cy.contains("Name").should("have.text", "Name")
            cy.contains("Email").should("have.text", "Email")
            cy.contains("Desired Position").should("have.text", "Desired Position")

            cy.contains("Phone").should("have.text", "Phone")
            cy.get('#input_comp-l46hci9w').type(data.phone).should("have.value", data.phone)

            cy.contains("Date Of Availability").should("have.text", "Date Of Availability")

            cy.contains("Expected Salary").should("have.text", "Expected Salary")
            cy.get('#input_comp-l46hcia3').type(data.expectedSalary).should("have.value", data.expectedSalary)

            cy.contains("Years of Experience").should("have.text", "Years of Experience")
            cy.get(':nth-child(2) > ._1iHqk').click()

            cy.contains("Skills").should("have.text", "Skills")
            cy.contains("Manual Testing").should("have.text", "Manual Testing")
            cy.contains("API Testing").should("have.text", "API Testing")
            cy.contains("Automated Testing").should("have.text", "Automated Testing")
            cy.get('#comp-l46hciac1 > .x6FDj').should("have.text", "I have answered the above questions to the best of my availability")
            
            cy.wait(10000) // for recaptcha slow loading
            cy.get('iframe')
            .first()
            .then((recaptchaIframe) => {
              const body = recaptchaIframe.contents()
              cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
            })


            cy.contains("Submit").click()
        })
       
    })


})

