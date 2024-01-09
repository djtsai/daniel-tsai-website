import Head from 'next/head'
import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'
import { createClient } from "@/prismicio"
import { components } from '@/slices'

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('home-page').catch(() => notFound())
  const menu = await client.getSingle('menu')
  const footer = await client.getSingle('footer')

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
