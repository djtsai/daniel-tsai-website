import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import type { NextApiRequestLike, NextApiResponseLike } from '@prismicio/next/src/types'
import { createClient } from '@/prismicio'

export default async function handler(req: NextApiRequestLike, res: NextApiResponseLike) {
  const client = createClient({ req })
  await setPreviewData({ req, res })
  await redirectToPreviewURL({ req, res, client })
}
