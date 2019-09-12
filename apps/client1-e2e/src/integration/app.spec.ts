import { getGreeting } from '../support/app.po';

describe('client1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to client1!');
  });
});
