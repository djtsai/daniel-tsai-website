import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'
import { createClient } from "@/prismicio"
import { components } from '@/slices'

type Params = { uid: string }

/**
 * @param {{ params: Params }}
 * @returns Promise<import('next').Metadata>
 */
export async function generateMetadata({ params }: { params: Params }) {
  const client = createClient()
  const page = await client.getSingle('home-page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('home-page').catch(() => notFound())
  const menu = await client.getSingle('menu')
  const footer = await client.getSingle('footer')

  return (
    <Layout menu={menu} footer={footer}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}
