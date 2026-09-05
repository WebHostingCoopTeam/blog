import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'


const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-6 border-b border-gray-100 dark:border-gray-800'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50 shadow-xs'
  }

  return (
    <div className="w-full">
      {/* Full-width edge-to-edge top utility bar */}
      <div className="w-full border-b-2 border-sky-400 bg-[#0b2545] dark:border-sky-400 dark:bg-[#07192f]">
        <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-white/90 sm:px-6 lg:px-8 xl:px-12 dark:text-white/90">
          <div className="flex items-center space-x-4">
            <a
              href="https://webhosting.coop/about-coop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-300 transition-colors"
            >
              What is a Cooperative?
            </a>
            <span className="text-white/40">•</span>
            <a
              href="https://webhosting.coop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              WebHosting.coop
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:8555122667"
              className="hidden items-center gap-1 text-white/90 hover:text-sky-300 sm:inline-flex transition-colors"
            >
              855.512.2667
            </a>
            <a
              href="https://dashboard.webhosting.coop/index.php/login"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-500 hover:bg-accent-600 px-3.5 py-1 text-xs font-bold text-white shadow-sm transition-colors"
            >
              Login &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar edge-to-edge */}
      <div className="w-full border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) items-center justify-between py-6 px-4 sm:px-6 lg:px-8 xl:px-12">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo className="h-10 w-auto sm:h-12" />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-xl font-bold tracking-tight text-gray-900 sm:block dark:text-gray-100">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 m-1 font-semibold text-gray-800 transition-colors dark:text-gray-200"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Internet Cooperative Hero Banner inside max-width container */}
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="my-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md dark:border-gray-800">
          <div className="relative aspect-[21/9] w-full min-h-[220px] sm:min-h-[280px] md:min-h-[340px] bg-[#071326]">
            <img
              src="/static/images/internet-cooperative-banner.jpg"
              alt="Internet Cooperative - Non-Profit Web Hosting Association"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
