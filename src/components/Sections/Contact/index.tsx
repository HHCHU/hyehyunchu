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
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <EnvelopeIcon className="hidden h-12 w-12 text-sky-500 md:block" />
              <h2 className="text-2xl font-bold text-gray-900">{headerText}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
                <p className="prose leading-6 text-gray-600">{description}</p>
                <dl className="flex flex-col space-y-4 text-base text-gray-600 sm:space-y-2">
                  {items.map(({ type, text, href }) => {
                    const { Icon, srLabel } = ContactValueMap[type];
                    return (
                      <div key={srLabel}>
                        <dt className="sr-only">{srLabel}</dt>
                        <dd className="flex items-center">
                          <a
                            className={classNames(
                              "-m-2 flex rounded-md p-2 text-gray-600 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 transition-colors",
                              { "hover:text-sky-600": href }
                            )}
                            href={href}
                            target="_blank"
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-4 w-4 flex-shrink-0 text-gray-500 sm:h-5 sm:w-5"
                            />
                            <span className="ml-3 text-sm sm:text-base">
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
