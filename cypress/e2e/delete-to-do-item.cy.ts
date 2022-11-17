describe('To-do', () => {
  it('Delete to-do item', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.assertNavBarIsVisible()

    cy.assertHeaderIsVisible()

    cy.assertToDoListLength(2)

    cy.deleteToDoTask(0)

    cy.assertToDoListLength(2)
  })
})
