import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import type { FooterDocument, MenuDocument } from '@/prismicio-types'

type LayoutProps = {
  menu: MenuDocument,
  footer: FooterDocument
}

const Layout = ({ children, menu, footer }: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <Header menu={menu} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
