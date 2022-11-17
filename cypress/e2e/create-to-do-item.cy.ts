describe('To-do', () => {
  it('Create to-do item', () => {
    const toDoTask = 'Pet cat'

    cy.contains('todos')

    cy.visit('https://example.cypress.io/todo')

    cy.assertNavBarIsVisible()

    cy.assertHeaderIsVisible()

    cy.assertToDoListLength(2)

    cy.enterToDoTask(toDoTask)
      .assertInputValue(toDoTask)

    cy.submitToDoTask()

    cy.assertToDoListLength(3)
  })
})
