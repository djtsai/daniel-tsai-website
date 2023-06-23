import { exitPreview } from '@prismicio/next'
import type { NextApiRequestLike, NextApiResponseLike } from '@prismicio/next/src/types'

export async function handler(req: NextApiRequestLike, res: NextApiResponseLike) {
  return await exitPreview({ req, res })
}
