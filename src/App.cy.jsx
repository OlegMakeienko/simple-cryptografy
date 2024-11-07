import React from 'react'
import App from './App'

describe('<App />', () => {
  beforeEach(() => {
    cy.mount(<App />)
  })

  it('renders', () => {
    cy.contains('h1', 'Simple Encryption/Decryption Desktop App')
  })

  it('should encrypt text', () => {
    const testText = 'Oleg Makeienko!'
    cy.get('input[type="text"]').type(testText)
    cy.contains('button', 'Encrypt').click()
    cy.get('h2').should('contain', 'Result:')
    cy.get('p').should('not.have.text', testText) // Krypterad text kommer här
  })

  it('should decrypt text', () => {
    const testText = 'Encrypted message'
    cy.get('input[type="text"]').type(testText)
    cy.contains('button', 'Encrypt').click()

    // Spara den krypterade texten
    cy.get('p').invoke('text').then((encryptedText) => {
      // Rensa input och ange den krypterade texten
      cy.get('input[type="text"]').clear().type(encryptedText)
      cy.contains('button', 'Decrypt').click()

      // Kontrollera att den dekrypterade texten matchar originalet
      cy.get('p').should('have.text', testText)
    })
  })

  it('should handle empty input', () => {
    cy.contains('button', 'Encrypt').click()
    cy.get('p').should('be.empty')

    cy.contains('button', 'Decrypt').click()
    cy.get('p').should('be.empty')
  })
})