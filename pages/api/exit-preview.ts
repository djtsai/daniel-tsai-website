import { exitPreview } from '@prismicio/next'
import type { NextApiRequestLike, NextApiResponseLike } from '@prismicio/next/src/types'

export default async function handler(req: NextApiRequestLike, res: NextApiResponseLike) {
  exitPreview({ req, res })
}
