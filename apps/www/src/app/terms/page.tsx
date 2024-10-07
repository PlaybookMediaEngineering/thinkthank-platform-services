import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Think Thank Media Terms of Service',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Terms of Service</Heading>
      <Lead className="mt-6 max-w-3xl">Last updated: September 15th, 2024</Lead>
      <section className="mb-8 mt-16 grid grid-cols-1 lg:gap-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-4 text-sm/6 text-gray-600">
            These Terms and Conditions (&quot;Terms&quot;, &quot;Terms and
            Conditions&quot;) govern your relationship with Think Thank Media
            application (the &quot;Service&quot;) operated by Think Thank Media
            (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Please read these Terms and Conditions carefully before using our
            Think Thank Media application (the &quot;Service&quot;).
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </p>
          <h3 className="mt-6 text-xl font-medium">Subscriptions</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Some parts of the Service are billed on a subscription basis
            (&quot;Subscription(s)&quot;). You will be billed in advance on a
            recurring and periodic basis (&quot;Billing Cycle&quot;). Billing
            cycles are set on a monthly basis.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            At the end of each Billing Cycle, your Subscription will
            automatically renew under the exact same conditions unless you
            cancel it or Think Thank Media cancels it. You may cancel your
            Subscription renewal either through your online account management
            page or by contacting Think Thank Media customer support team.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            A valid payment method, including credit card, is required to
            process the payment for your Subscription. You shall provide Think
            Thank Media with accurate and complete billing information including
            full name, address, state, zip code, telephone number, and a valid
            payment method information. By submitting such payment information,
            you automatically authorize Think Thank Media to charge all
            Subscription fees incurred through your account to any such payment
            instruments.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Should automatic billing fail to occur for any reason, Think Thank
            Media will issue an electronic invoice indicating that you must
            proceed manually, within a certain deadline date, with the full
            payment corresponding to the billing period as indicated on the
            invoice.
          </p>
          <h3 className="mt-6 text-xl font-medium">Fee Changes</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Think Thank Media, in its sole discretion and at any time, may
            modify the Subscription fees for the Subscriptions. Any Subscription
            fee change will become effective at the end of the then-current
            Billing Cycle.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Think Thank Media will provide you with a reasonable prior notice of
            any change in Subscription fees to give you an opportunity to
            terminate your Subscription before such change becomes effective.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Your continued use of the Service after the Subscription fee change
            comes into effect constitutes your agreement to pay the modified
            Subscription fee amount.
          </p>
          <h3 className="mt-6 text-xl font-medium">Refunds</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Certain refund requests for Subscriptions may be considered by Think
            Thank Media on a case-by-case basis and granted in sole discretion
            of Think Thank Media.
          </p>
          <h3 className="mt-6 text-xl font-medium">Content</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Our Service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material (&quot;Content&quot;). You are responsible for the Content
            that you post to the Service, including its legality, reliability,
            and appropriateness.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            By posting Content to the Service, you grant us the right and
            license to use, modify, publicly perform, publicly display,
            reproduce, and distribute such Content on and through the Service.
            You retain any and all of your rights to any Content you submit,
            post or display on or through the Service and you are responsible
            for protecting those rights. You agree that this license includes
            the right for us to make your Content available to other users of
            the Service, who may also use your Content subject to these Terms.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            You represent and warrant that: (i) the Content is yours (you own
            it) or you have the right to use it and grant us the rights and
            license as provided in these Terms, and (ii) the posting of your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person.
          </p>
          <h3 className="mt-6 text-xl font-medium">Accounts</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our Service.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            service.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trade mark that
            is subject to any rights of another person or entity other than you
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
          <h3 className="mt-6 text-xl font-medium">Copyright Policy</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on the Service
            infringes the copyright or other intellectual property infringement
            (&quot;Infringement&quot;) of any person.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement that is taking place through the
            Service, you must submit your notice in writing to the attention of
            &quot;Copyright Infringement&quot; of dmca@thinkthank.io and include
            in your notice a detailed description of the alleged Infringement.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            You may be held accountable for damages (including costs and
            attorneys&apos; fees) for misrepresenting that any Content is
            infringing your copyright.
          </p>
          <h3 className="mt-6 text-xl font-medium">Intellectual Property</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            The Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property of Think Thank Media and its licensors. The Service is
            protected by copyright, trademark, and other laws of both the United
            States Of America and foreign countries. Our trademarks and trade
            dress may not be used in connection with any product or service
            without the prior written consent of Think Thank Media.
          </p>
          <h3 className="mt-6 text-xl font-medium">Links To Other Web Sites</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Think Thank Media.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Think Thank Media has no control over, and assumes no responsibility
            for, the content, privacy policies, or practices of any third party
            web sites or services. You further acknowledge and agree that Think
            Thank Media shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with use of or reliance on any such content, goods
            or services available on or through any such web sites or services.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party web sites or services that you visit.
          </p>
          <h3 className="mt-6 text-xl font-medium">Termination</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service.
          </p>
          <h3 className="mt-6 text-xl font-medium">Limitation Of Liability</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            In no event shall Think Thank Media, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service; (iii) any content
            obtained from the Service; and (iv) unauthorized access, use or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </p>
          <h3 className="mt-6 text-xl font-medium">Disclaimer</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            Your use of the Service is at your sole risk. The Service is
            provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
            The Service is provided without warranties of any kind, whether
            express or implied, including, but not limited to, implied
            warranties of merchantability, fitness for a particular purpose,
            non-infringement or course of performance.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Think Thank Media its subsidiaries, affiliates, and its licensors do
            not warrant that a) the Service will function uninterrupted, secure
            or available at any particular time or location; b) any errors or
            defects will be corrected; c) the Service is free of viruses or
            other harmful components; or d) the results of using the Service
            will meet your requirements.
          </p>
          <h3 className="mt-6 text-xl font-medium">Governing Law</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            These Terms shall be governed and construed in accordance with the
            laws of United States Of America, without regard to its conflict of
            law provisions.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
          <h3 className="mt-6 text-xl font-medium">Changes</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>
          <h3 className="mt-6 text-xl font-medium">Contact Us</h3>
          <p className="mt-4 text-sm/6 text-gray-600">
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
    </main>
  )
}
