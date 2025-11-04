import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
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
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: "Instagram" },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="bg-white border border-gray-200 rounded-xl py-6 px-6 md:py-8 md:px-10 shadow-sm">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <EnvelopeIcon className="hidden h-12 w-12 text-sky-500 md:block" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-0">{headerText}</h2>
            </div>
            <div className="grid grid-cols-1">
              <div className="order-1 col-span-1 flex flex-col gap-y-3 md:order-2">
                <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-0">{description}</p>
                <dl className="flex flex-col space-y-0.5 text-base text-gray-600">
                  {items.map(({ type, text, href }) => {
                    const { Icon, srLabel } = ContactValueMap[type];
                    return (
                      <div key={srLabel}>
                        <dt className="sr-only">{srLabel}</dt>
                        <dd className="flex items-center">
                          <a
                            className={classNames(
                              "flex items-center rounded-lg px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200",
                              { "hover:text-sky-600": href }
                            )}
                            href={href}
                            target="_blank"
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-5 w-5 flex-shrink-0 text-gray-500 sm:h-6 sm:w-6"
                            />
                            <span className="ml-4 text-base sm:text-lg font-medium">
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
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
