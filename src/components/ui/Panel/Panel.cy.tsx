import Panel from '@ui/Panel'

const panelData = {
  "id": 64,
  "direction": "ltr",
  "linktext": "Find out more",
  "linkhref": "/shop",
  "excerpt": "Before @custom-media, media queries had to repeat themselves over and over, or rely on preprocessors to generate the proper output based on static variables during build time.",
  "title": "@custom-media",
  "photos": [
    {
      "id": "clbgqpesd000obqpk3g0jce6r",
      "height": 640,
      "width": 1000,
      "url": "/images/mac.png",
      "alt": "mac"
    }
  ]
}

describe('Panel', () => {
  it('Has correct Panel title', () => {
    cy.mount(<Panel compact={false} i={0} page={panelData} testing={true} />)
    cy.get('h3').contains('@custom-media')
  })
})

export {}
