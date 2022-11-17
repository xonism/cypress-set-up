declare namespace Cypress {
  interface Chainable {
    assertNavBarIsVisible(): Chainable<Element>
    assertHeaderIsVisible(): Chainable<Element>
    assertToDoListLength(expectedLength: number): Chainable<Element>
    submitToDoTask(): Chainable<Element>
    enterToDoTask(taskText: string): Chainable<Element>
    assertInputValue(expectedValue: string): Chainable<Element>
    deleteToDoTask(numberOfTask: number): Chainable<Element>
  }
}

Cypress.Commands.add('assertNavBarIsVisible', () => {
  cy.get('nav')
    .should('be.visible')
    .and('contain', 'cypress.io')
})

Cypress.Commands.add('assertHeaderIsVisible', () => {
  cy.get('.header h1')
    .should('be.visible')
    .and('contain', 'todos')
})

Cypress.Commands.add('assertToDoListLength', (expectedLength) => {
  cy.get('.todo-list li')
    .should('be.visible')
    .and('have.length', expectedLength)

  cy.get('.todo-count')
    .should('be.visible')
    .and('contain', expectedLength)
})

Cypress.Commands.add('submitToDoTask', () => {
  cy.get('[data-test="new-todo"]')
    .should('be.visible')
    .type('{enter}')
})

Cypress.Commands.add('enterToDoTask', (taskText) => {
  cy.get('[data-test="new-todo"]')
    .should('be.visible')
    .type(taskText)
})

Cypress.Commands.add('assertInputValue', { prevSubject: true }, (subject, expectedValue) => {
  cy.wrap(subject)
    .should('be.visible')
    .invoke('val')
    .should('contain', expectedValue)
})

Cypress.Commands.add('deleteToDoTask', (numberOfTask) => {
  cy.get('.destroy')
    .invoke('show')
    .should('be.visible')
    .eq(numberOfTask)
    .click()
})
