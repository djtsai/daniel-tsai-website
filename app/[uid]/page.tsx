import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'
import { createClient } from '@/prismicio'
import { components } from '@/slices'

type Params = { uid: string }

/**
 * @param {{ params: Params }}
 * @returns Promise<import('next').Metadata>
 */
export async function generateMetadata({ params }: { params: Params }) {
  const client = createClient()
  const page = await client.getByUID('page', params.uid)

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

/**
 * @param {{ params: Params }}
 */
export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client.getByUID('page', params.uid).catch(() => notFound())
  const menu = await client.getSingle('menu')
  const footer = await client.getSingle('footer')

  return (
    <Layout menu={menu} footer={footer}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}
