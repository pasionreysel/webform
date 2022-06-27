/// <reference types="cypress" />

describe("Test WebForm", () => {
    beforeEach(() => {
        // Visit Test Form URL
        cy.visit("https://josephyap9.wixsite.com/qaetestsite")

        // Check Title label if it's correct
        cy.contains("TESTING FORM").should("have.text", "TESTING FORM")
    })

    // User Info
    const data = {
        name: "reysel",
        email: "reysel@gmail.com",
        position: "QAE",
        phone: "09195091849",
        dateAvailability: "06/01/2022",
        expectedSalary: "40000",
        skills: ["Manual Testing", "API Testing", "Automated Testing" ]
    }

    it("Verify if user can't submit the form without filling the required fields", () => {
        
        cy.get("#comp-l46hci9a").within(function() {

            // Check Name label if it's correct
            cy.contains("Name").should("have.text", "Name")

            // Check Email label if it's correct
            cy.contains("Email").should("have.text", "Email")

           // Check Desired Position label if it's correct
            cy.contains("Desired Position").should("have.text", "Desired Position")

            // Check Phone label if it's correct
            cy.contains("Phone").should("have.text", "Phone")

            // Insert value on field Phone & check it's value
            cy.get('#input_comp-l46hci9w').type(data.phone).should("have.value", data.phone)

            // Check Date Of Availability label if it's correct
            cy.contains("Date Of Availability").should("have.text", "Date Of Availability")

            // Check Expected Salary label if it's correct
            cy.contains("Expected Salary").should("have.text", "Expected Salary")
           
            // Insert value on field Expected Salary & check it's value
            cy.get('#input_comp-l46hcia3').type(data.expectedSalary).should("have.value", data.expectedSalary)

            // Check Name label if it's correct
            cy.contains("Years of Experience").should("have.text", "Years of Experience")
            
              // Select 2-5 years of experience
            cy.get(':nth-child(2) > ._1iHqk').click()

            // Check Skills label if it's correct
            cy.contains("Skills").should("have.text", "Skills")
           
            // Check Manual Testing label if it's correct
            cy.contains("Manual Testing").should("have.text", "Manual Testing")
          
            // Check API Testing if it's correct
            cy.contains("API Testing").should("have.text", "API Testing")
            
            // Check Automation Testing if it's correct
            cy.contains("Automated Testing").should("have.text", "Automated Testing")
           
           // Check I have answered the above questions to the best of my availability if it's correct & click
            cy.get('#comp-l46hciac1 > .x6FDj').should("have.text", "I have answered the above questions to the best of my availability")
            
            // Submit the Test Fom
            cy.contains("Submit").click()
        })
    })

    it("Verify if user can submit the form", () => {

        // Check Name label if it's correct
        cy.contains("Name").should("have.text", "Name")

        // Insert value on field Name & check it's value
        cy.get('#input_comp-l46hci9f1').type(data.name).should("have.value", data.name)

        // Check Email label if it's correct
        cy.contains("Email").should("have.text", "Email")

        // Insert value on field Name & check it's value
        cy.get('#input_comp-l46hci9k2').type(data.email).should("have.value", data.email)

        // Check Desired Position label if it's correct
        cy.contains("Desired Position").should("have.text", "Desired Position")

        // Select value on field Desired Position & check it's value
        cy.get('#collection_comp-l46hci9n').select(data.position).should("have.value", data.position)

        // Check Phone label if it's correct
        cy.contains("Phone").should("have.text", "Phone")

        // Insert value on field Phone & check it's value
        cy.get('#input_comp-l46hci9w').type(data.phone).should("have.value", data.phone)

        // Check Date Of Availability if it's correct
        cy.contains("Date Of Availability").should("have.text", "Date Of Availability")
        
        // Select a Date
        cy.get('.TUQC6').click()
        cy.get('._2tVQT').within(function() {
            // click day 28
            cy.get('button').contains(28).click()
        })

        // Check Expected Salary label if it's correct
        cy.contains("Expected Salary").should("have.text", "Expected Salary")

        // Insert value on field Expected Salary & check it's value
        cy.get('#input_comp-l46hcia3').type(data.expectedSalary).should("have.value", data.expectedSalary)

        // Check Years of Experience label if it's correct
        cy.contains("Years of Experience").should("have.text", "Years of Experience")

        // Select 5 years of experience
        cy.get(':nth-child(3) > ._1iHqk').click()

        // Check Skills label if it's correct
        cy.contains("Skills").should("have.text", "Skills").click()

        // Check Manual Testing label if it's correct
        cy.contains("Manual Testing").should("have.text", data.skills[0]).click()

        // Check API Testing if it's correct
        cy.contains("API Testing").should("have.text", data.skills[1]).click()

        // Check Automation Testing if it's correct
        cy.contains("Automated Testing").should("have.text", data.skills[2]).click()

        // Check I have answered the above questions to the best of my availability if it's correct & click
        cy.get('#comp-l46hciac1 > .x6FDj').should("have.text", "I have answered the above questions to the best of my availability").click()
            
        // Click Recaptch 
        cy.get('iframe')
        .first()
        .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        })

        // Submit the Test Fom
        cy.contains("Submit").click()
    })
})