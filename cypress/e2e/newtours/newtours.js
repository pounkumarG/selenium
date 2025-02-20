import {Given} from "cypress-cucumber-preprocessor/steps";

Given("precondition",()=>{
    cy.visit('https://amphora.net/')
})
