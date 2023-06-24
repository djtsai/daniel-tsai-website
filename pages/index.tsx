import Head from 'next/head'
import type { PreviewData } from 'next'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import Layout from '@/components/Layout'
import { components } from '@/slices'
import type { FooterDocument, HomePageDocument, MenuDocument } from '@/prismicio-types'

export default function Home({ page, menu, footer }: { page: HomePageDocument, menu: MenuDocument, footer: FooterDocument }) {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name='description' content={String(page.data.meta_description)} />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }: { previewData: PreviewData }) {
  const client = createClient({ previewData })

  const page: HomePageDocument = await client.getSingle('home-page')
  const menu: MenuDocument = await client.getSingle('menu')
  const footer: FooterDocument = await client.getSingle('footer')

  return {
    props: {
      page,
      menu,
      footer
    }
  }
}
