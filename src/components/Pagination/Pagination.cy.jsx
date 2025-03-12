import Pagination from '.'

describe('<Pagination />', () => {
  it('renders in the first page (Prev button disabled)', () => {
    cy.mount(<Pagination currentPage={1} />)

    cy.contains('button', 'Prev').should('be.disabled')
    cy.contains('button', 'Next').should('be.enabled')
    cy.contains('span', 'Page 1 of 2').should('be.visible')
  })

  it('renders in the last page (Next button disabled)', () => {
    cy.mount(<Pagination currentPage={2} totalPages={2} />)

    cy.contains('button', 'Prev').should('be.enabled')
    cy.contains('button', 'Next').should('be.disabled')
    cy.contains('span', 'Page 2 of 2').should('be.visible')
  })
})
