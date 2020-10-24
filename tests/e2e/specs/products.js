describe('Product page', () => {
    it('Filtra productos por nombre', () => {
      cy.visit('/')
      cy.get('.column.is-4').should('have.length', 14)
      cy.get('input').type('Casa')
      cy.get('.column.is-4').should('have.length', 1)
    })
    it('Añadir productos al carro', () => {
        cy.visit('/')
        cy.get('.card button.is-pulled-right.is-warning').first().click()
        cy.get('.navbar-burger').click()
        cy.get('span.tag.is-warning').contains('1')
      })
  })
  