import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon as AcademicCapIconSolid } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { FC, memo } from "react";

import { contact } from "../../../data/data";
import { ContactType, ContactValue } from "../../../data/dataDef";
import FacebookIcon from "../../Icon/FacebookIcon";
import GithubIcon from "../../Icon/GithubIcon";
import InstagramIcon from "../../Icon/InstagramIcon";
import LinkedInIcon from "../../Icon/LinkedInIcon";
import TwitterIcon from "../../Icon/TwitterIcon";

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: "Email" },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: "Phone" },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: "Location" },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: "Github" },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: "LinkedIn" },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: "Facebook" },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: "Twitter" },
  [ContactType.GoogleScholar]: { Icon: AcademicCapIconSolid, srLabel: "Google Scholar" },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: "Instagram" },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <EnvelopeIcon className="hidden h-10 w-10 text-black/60 dark:text-white/60 md:block" />
            <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-0" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{headerText}</h2>
          </div>
          <div className="grid grid-cols-1">
            <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
              <p className="text-base md:text-lg leading-normal text-black/80 dark:text-white/80 mb-0 font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{description}</p>
              <dl className="flex flex-col text-base text-black dark:text-white font-light" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                {items.map(({ type, text, href }) => {
                  const { Icon, srLabel } = ContactValueMap[type];
                  return (
                    <div key={srLabel}>
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center">
                        <a
                          className={classNames(
                            "flex items-center py-1 text-black dark:text-white hover:underline focus:outline-none transition-all",
                            { "hover:underline": href }
                          )}
                          href={href}
                          target="_blank"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-black/60 dark:text-white/60 sm:h-5 sm:w-5"
                          />
                          <span className="ml-3 text-base sm:text-base font-light">
                            {text}
                          </span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
