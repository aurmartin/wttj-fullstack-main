describe('My First Test', () => {
  before(() => {
    cy.request('POST', '/test/db')
  })

  it('Check lists headers', () => {
    cy.visit('/')

    cy.get(".wttj_fullstack-list-header")
      .should("contain", "Refusé")
      .and("contain", "Nouveau")
      .and("contain", "A rencontrer")
      .and("contain", "Entretien")
      .and("contain", "Accepté")
  })

  it('Move candidacy', () => {
    cy.visit('/')

    cy.get(".smooth-dnd-draggable-wrapper")
      .first()
      .trigger('mousedown', { which: 1 })

    cy.get(".wttj_fullstack-list-wrapper[id='refused']")
      .first()
      .trigger('mousemove')
      .trigger('mousemove')
      .trigger('mouseup', { force: true })
  })
})
