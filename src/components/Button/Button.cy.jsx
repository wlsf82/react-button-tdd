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
})
