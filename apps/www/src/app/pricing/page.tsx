/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Think Thank Media offers flexible pricing options to meet your needs.',
}

const tiers = [
  {
    name: 'Informed' as const,
    slug: 'informed',
    description: 'Essential global insights for individual users.',
    priceMonthly: 9,
    href: 'https://app.thinkthankmedia.io',
    highlights: [
      { description: 'Access to daily global news summaries' },
      { description: 'Basic topic customization' },
      { description: 'Weekly in-depth analysis on key events' },
      { description: 'Mobile app access', disabled: false },
      { description: 'AI-powered content recommendations', disabled: true },
    ],
    features: [
      {
        section: 'Content',
        name: 'Daily news summaries',
        value: true,
      },
      {
        section: 'Content',
        name: 'In-depth analyses',
        value: 'Weekly',
      },
      {
        section: 'Content',
        name: 'Historical context articles',
        value: '5 / month',
      },
      {
        section: 'Customization',
        name: 'Topic filters',
        value: 3,
      },
      {
        section: 'Customization',
        name: 'AI content recommendations',
        value: false,
      },
      {
        section: 'Access',
        name: 'Mobile app',
        value: true,
      },
      {
        section: 'Access',
        name: 'Desktop site',
        value: true,
      },
      {
        section: 'Interaction',
        name: 'Community discussions',
        value: 'Read-only',
      },
      {
        section: 'Support',
        name: 'Email support',
        value: true,
      },
    ],
  },
  {
    name: 'Analyst' as const,
    slug: 'analyst',
    description: 'Comprehensive global insights for professionals.',
    priceMonthly: 29,
    href: 'https://app.thinkthankmedia.io',
    highlights: [
      { description: 'Unlimited access to all analyses and reports' },
      { description: 'Advanced topic and region customization' },
      { description: 'Daily in-depth analyses on key events' },
      { description: 'AI-powered content recommendations', disabled: false },
      { description: 'Participate in expert discussions' },
    ],
    features: [
      {
        section: 'Content',
        name: 'Daily news summaries',
        value: true,
      },
      {
        section: 'Content',
        name: 'In-depth analyses',
        value: 'Daily',
      },
      {
        section: 'Content',
        name: 'Historical context articles',
        value: 'Unlimited',
      },
      {
        section: 'Customization',
        name: 'Topic and region filters',
        value: 'Unlimited',
      },
      {
        section: 'Customization',
        name: 'AI content recommendations',
        value: true,
      },
      {
        section: 'Access',
        name: 'Mobile app',
        value: true,
      },
      {
        section: 'Access',
        name: 'Desktop site',
        value: true,
      },
      {
        section: 'Interaction',
        name: 'Community discussions',
        value: 'Full participation',
      },
      {
        section: 'Support',
        name: 'Email support',
        value: true,
      },
      {
        section: 'Support',
        name: 'Priority support',
        value: true,
      },
    ],
  },
  {
    name: 'Enterprise' as const,
    slug: 'enterprise',
    description: 'Tailored global intelligence for organizations.',
    priceMonthly: 'Custom',
    href: 'https://app.thinkthankmedia.io',
    highlights: [
      { description: 'Customized analysis and reporting' },
      { description: 'Dedicated research team' },
      { description: 'API access for integration' },
      { description: 'Advanced AI-powered insights', disabled: false },
      { description: 'Unlimited user accounts' },
    ],
    features: [
      {
        section: 'Content',
        name: 'Customized analyses and reports',
        value: true,
      },
      {
        section: 'Content',
        name: 'Real-time alerts',
        value: true,
      },
      {
        section: 'Content',
        name: 'Historical data access',
        value: 'Full archive',
      },
      {
        section: 'Customization',
        name: 'Dedicated research team',
        value: true,
      },
      {
        section: 'Customization',
        name: 'Advanced AI insights',
        value: true,
      },
      {
        section: 'Access',
        name: 'API integration',
        value: true,
      },
      {
        section: 'Access',
        name: 'User accounts',
        value: 'Unlimited',
      },
      {
        section: 'Interaction',
        name: 'Private briefings',
        value: 'Monthly',
      },
      {
        section: 'Support',
        name: 'Dedicated account manager',
        value: true,
      },
      {
        section: 'Support',
        name: '24/7 priority support',
        value: true,
      },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Flexible pricing</Heading>
      {/* <Lead className="max-w-3xl mt-6">
        Professionals and organizations worldwide rely on Think Thank Media for crucial global insights. Subscribe today and stay ahead of international developments.
      </Lead> */}
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        {/* <LogoCloud className="mt-24" /> */}
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Start a free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-[selected]:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-slate-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-[--button-width] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-slate-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pb-0 pt-4 data-[selected]:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pb-0 pt-10 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-[selected]:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Thanks to Think Thank Media, we&apos;re finding new leads that
                  we never would have found with legal methods.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              How does Think Thank Media ensure the accuracy of its global news
              analysis?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              We employ a rigorous fact-checking process and rely on a diverse
              network of credible sources worldwide. Our team of experienced
              journalists and analysts cross-verify information from multiple
              perspectives before publishing. We also use advanced AI tools to
              assist in data analysis and pattern recognition, always under
              human oversight.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Is there a mobile app available for accessing Think Thank Media's
              content?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, we offer a mobile app that provides access to all our key
              features, including real-time news updates, in-depth analyses, and
              customized alerts. The app is available for both iOS and Android
              devices, ensuring you stay informed about global events wherever
              you are.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I customize the type of news and analysis I receive?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. Our platform offers extensive customization options.
              You can set preferences for specific regions, topics, or
              industries you're interested in. Our AI-powered recommendation
              system also learns from your reading habits to suggest relevant
              content, helping you discover important stories you might have
              otherwise missed.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What kind of support do you offer to subscribers?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              We offer comprehensive support through multiple channels,
              including email and live chat. Our support team is trained to
              assist with technical issues, account management, and general
              inquiries about our content. Enterprise subscribers also benefit
              from dedicated account managers for personalized assistance.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How does Think Thank Media handle data privacy and security?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              We take data privacy and security very seriously. All user data is
              encrypted and stored securely. We adhere to strict privacy
              policies and comply with global data protection regulations. We
              never sell personal data to third parties. Users have full control
              over their data and can request its deletion at any time.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Pricing({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)!
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      {/* <Testimonial /> */}
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
