import { Send } from 'lucide-react';

import Button from './'

describe('<Button />', () => {
  it('renders a save button', () => {
    cy.mount(<Button label='Save' />)

    cy.contains('button', 'Save')
      .should('be.visible')
      .and('be.enabled')
  })

  it('renders a send button with a paper airplane icon', () => {
    cy.mount(<Button label='Send' icon={<Send />} />)

    cy.contains('button', 'Send')
      .should('be.visible')
      .and('be.enabled')
      .as('sendButton')
    cy.get('@sendButton')
      .find('svg.lucide-send')
      .should('exist')
  })

  it('triggers the button onclick event on click', () => {
    const onClickSpy = cy.spy().as('onClickSpy')

    cy.mount(<Button label='Ok' onClick={onClickSpy} />)

    cy.contains('button', 'Ok').click()

    cy.get('@onClickSpy').should('have.been.calledOnce')
  })

  it('renders a disabled button', () => {
    cy.mount(<Button label="I'm disabled" disabled={true} />)

    cy.contains('button', "I'm disabled").should('be.disabled')
  })
})
