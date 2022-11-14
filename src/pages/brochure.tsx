import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'
import Panel from '@components/ui/Panel'
import booksPic from '@images/books.png'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'

const Brochure: NextPage = () => {
  return (
    <LayoutStandard>
      <Meta />
      <h1>Brochure</h1>
      <Panel image={booksPic} />
    </LayoutStandard>
  )
}

export default Brochure
