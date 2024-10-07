import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

// Import the feature flag from the centralized config
import { default as BeehiivEmbed } from '@/components/beehiv-form'
import { SHOW_PARTNERS, SHOW_TESTIMONIALS } from '@/configs/featureFlags'

export const metadata: Metadata = {
  description:
    'Think Thank Media helps you navigate complex world events through clear, concise analysis',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
        // banner={
        //   <Link
        // href="/blog/Think Thank Media-raises-100m-series-a-from-tailwind-ventures"
        //     className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
        //   >
        //     Think Thank Media Web App In Private Beta
        //     <ChevronRightIcon className="size-4" />
        //   </Link>
        // }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <Link
            href="/blog/Think Thank Media-raises-100m-series-a-from-tailwind-ventures"
            className="flex w-fit items-center gap-1 rounded-full border border-zinc-950 bg-white px-3 py-1 text-sm font-medium text-zinc-950 data-[hover]:bg-zinc-950 data-[hover]:text-white"
          >
            Think Thank Media Web App In Private Beta
            <ChevronRightIcon className="size-4" />
          </Link>
          <h1 className="font-display text-balance pt-4 text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Understand every story.
          </h1>
          <p className="mt-12 max-w-lg text-xl/7 font-medium text-gray-600 sm:text-2xl/8">
            We localize worldwide financial trends, helping you understand how
            global events impact your daily life.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.thinkthankmedia.io">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Heading as="h2" className="max-w-3xl">
            A panoramic view of global events shaping our world.
          </Heading>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4">
            <p>Sign up for our newsletter</p>
            <BeehiivEmbed />
          </div>
        </div>
        <BentoCard
          eyebrow="Limitless"
          title="A panoramic view of our world"
          description="Think Thank Media expands your global perspective, illuminating complex situations from every corner of the planet. Gain insights into regions often overlooked, and understand how local events shape our interconnected world."
          graphic={<Map />}
          className="mt-16 h-[36rem] rounded-4xl sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Uncover the stories behind the headlines
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Gain crystal-clear understanding"
          description="Think Thank Media breaks down complex global events into digestible analyses. Grasp the nuances of international affairs, economic trends, and societal shifts with our in-depth yet accessible coverage."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Stay ahead of global trends"
          description="With our advanced research methods, you'll understand emerging geopolitical shifts and economic developments before they become mainstream news. Gain a competitive edge in understanding world affairs."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for information seekers"
          description="Navigate complex global news with ease using our streamlined interface and intuitive search features. Quickly access in-depth analysis on breaking stories and long-term trends."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Expand your global perspective"
          description="Access diverse viewpoints and in-depth reporting from around the world. Our comprehensive coverage helps you understand events from multiple angles and cultural contexts."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Understand globally"
          description="Think Thank Media helps you comprehend complex situations in every corner of the world, including regions often overlooked by mainstream media."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-white py-32">
      <Container>
        <Subheading dark>Insight</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Understanding world events has never been clearer.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Networking"
            title="Understand at the speed of news"
            description="Our AI-powered platform analyzes global events in real-time, providing you with instant insights and context as stories unfold around the world."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Integrations"
            title="Access insights wherever you are"
            description="With multi-platform support, stay informed on global events through your preferred devices and apps, ensuring you never miss critical developments."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Meetings"
            title="Smart news scheduling"
            description="Customize your news feed to receive timely updates on the global events that matter most to you, delivered at your preferred intervals."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Engagement"
            title="Enhance your global perspective"
            description="Think Thank Media's AI-powered analysis helps you understand the complexities of world events, enabling you to engage in informed discussions on international affairs."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {SHOW_PARTNERS && (
          <Container className="mt-10">
            <LogoCloud />
          </Container>
        )}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Footer />
    </div>
  )
}
