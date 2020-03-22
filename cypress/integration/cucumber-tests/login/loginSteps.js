import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPage";

Given("I open login page", () => {
  LoginPage.visit();
});

When("I submit login", () => {
  LoginPage.fullUsername("username");
  LoginPage.fullPassword("password");
  LoginPage.submit();
});

Then("I should see homepage", () => {
  cy.get("#account_summary_tab").should("be.visible");
});
