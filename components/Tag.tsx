import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-2 mb-2 inline-block rounded-full bg-primary-50 px-3 py-0.5 text-xs font-semibold tracking-wide text-primary-700 transition-colors hover:bg-primary-100 hover:text-primary-800 dark:bg-primary-950/60 dark:text-primary-300 dark:hover:bg-primary-900/60 dark:hover:text-primary-200"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
