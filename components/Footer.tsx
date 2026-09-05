import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 pt-8 pb-12 dark:border-gray-800">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
        <div className="mb-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
          A Non-Profit Web Hosting Cooperative Association
        </div>
        <div className="mb-2 flex flex-wrap justify-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>•</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>•</div>
          <a
            href="https://webhosting.coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            WebHosting.coop
          </a>
          <div>•</div>
          <Link
            href="/"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {siteMetadata.title}
          </Link>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500">
          Internet ran & member owned.
        </div>
      </div>
    </footer>
  )
}
