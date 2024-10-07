export const SHOW_PARTNERS = process.env.NEXT_PUBLIC_SHOW_PARTNERS === 'true'
export const SHOW_TESTIMONIALS =
  process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS === 'true'

export const featureFlags = {
  showNavbarBanner: process.env.NEXT_PUBLIC_SHOW_NAVBAR_BANNER === 'true',
  showPricingAndCompany:
    process.env.NEXT_PUBLIC_SHOW_PRICING_AND_COMPANY === 'true',
}
