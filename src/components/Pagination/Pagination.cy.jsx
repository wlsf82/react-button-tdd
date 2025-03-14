import Pagination from '.'

describe('<Pagination />', () => {
  it('renders in the first page (Prev button disabled)', () => {
    cy.mount(<Pagination currentPage={1} totalPages={2} />)

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

  it('renders in the only page (Prev and Next buttons disabled)', () => {
    cy.mount(<Pagination currentPage={1} totalPages={1} />)

    cy.contains('button', 'Prev').should('be.disabled')
    cy.contains('button', 'Next').should('be.disabled')
    cy.contains('span', 'Page 1 of 1').should('be.visible')
  })

  it('renders in the middle page (Prev and Next buttons enabled)', () => {
    cy.mount(<Pagination currentPage={2} totalPages={3} />)

    cy.contains('button', 'Prev').should('be.enabled')
    cy.contains('button', 'Next').should('be.enabled')
    cy.contains('span', 'Page 2 of 3').should('be.visible')
  })
})
