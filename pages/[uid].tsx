import Head from 'next/head'
import type { PreviewData } from 'next'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import Layout from '@/components/Layout'
import { components } from '@/slices'
import type { FooterDocument, MenuDocument, PageDocument } from '@/prismicio-types'

export default function Page({ page, menu, footer }: { page: PageDocument, menu: MenuDocument, footer: FooterDocument }) {
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

export async function getStaticProps({ params, previewData }: { params: { uid: string }, previewData: PreviewData }) {
  const client = createClient({ previewData })

  const page: PageDocument = await client.getByUID('page', params.uid)
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

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => ({ params: { uid: page.uid } })),
    fallback: false
  }
}
