import { Given, When, Then } from '@cucumber/cucumber';
import { CreateContactPage } from '../../pages/contact/CreateContactPage';
import { testContact } from '../../models/contact/contactModel';
import { CustomWorld } from '../../support/hooks';

let createContactPage: CreateContactPage;

Given('the user navigates to the create contact page', async function (this: CustomWorld) {
  createContactPage = new CreateContactPage(this.page);
  await createContactPage.navigateToCreateContact();
});

When('the user fills in the contact form', async function () {
  await createContactPage.fillContactForm();
});

When('submits the contact form', async function () {
  await createContactPage.saveContact();
});

Then('the new contact should be created successfully', async function () {
  const fullName = `${testContact.firstName} ${testContact.lastName}`;
  await createContactPage.verifyContactCreated(fullName);
});
