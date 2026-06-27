import { FC, memo } from "react"

import { socialLinks } from "../data/data"

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({ label, Icon, href }) => (
        <a
          aria-label={label}
          className="-m-1.5 p-1.5 transition-all text-black hover:underline focus:outline-none sm:-m-3 sm:p-3"
          href={href}
          key={label}
        >
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  )
})

Socials.displayName = "Socials"
export default Socials
