import Button from './'

describe('<Button />', () => {
  it('renders a save button', () => {
    cy.mount(<Button label='Save' />)

    cy.contains('button', 'Save')
      .should('be.visible')
      .and('be.enabled')
  })
})
