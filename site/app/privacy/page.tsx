import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Composable',
  description: "Composable's Privacy Policy — how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Legal</p>
          <h1 className="font-display text-4xl font-extrabold text-ink-950 mb-4">Privacy Policy</h1>
          <p className="text-ink-500 text-sm">Last updated: April 27, 2026</p>
        </div>

        <div className="prose prose-ink max-w-none">
          <p className="text-ink-600 text-lg leading-relaxed mb-6">
            Composable Technologies Inc. (&ldquo;Composable,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of our customers and their employees. This Privacy Policy describes how we collect, use, disclose, and protect personal information.
          </p>

          {[
            {
              title: '1. Information We Collect',
              body: 'We collect information you provide directly when you create an account, configure compensation programs, or contact us. This includes: employer administrator account information (name, email, role, company details); employee data provided by your employer HRIS for the purpose of administering compensation elections (name, employment status, compensation band, tax jurisdiction); compensation election data entered by employees through the Composable platform; and usage data collected automatically through cookies and analytics tools.',
            },
            {
              title: '2. How We Use Your Information',
              body: 'We use the information we collect to: deliver and improve our platform and services; process compensation elections and generate required outputs (payroll export files, Total Rewards Statements); calculate tax estimates as employees configure their elections; send service-related notifications; and comply with legal obligations.',
            },
            {
              title: '3. Data Storage and Location',
              body: 'Employee data for Canadian customers is stored in AWS ca-central-1 (Montreal, Canada) by default. US customer data is stored in AWS us-east-1. Enterprise customers may request custom data residency arrangements. All data is encrypted at rest using AES-256 and in transit using TLS 1.3.',
            },
            {
              title: '4. Data Sharing',
              body: "We do not sell personal information. We share information with third-party service providers only as necessary to deliver our services (e.g., cloud infrastructure providers, email delivery). We require all service providers to maintain appropriate security standards. We may disclose information when required by law or to protect Composable's legal rights.",
            },
            {
              title: '5. Your Rights',
              body: 'Depending on your jurisdiction, you may have rights to: access personal information we hold about you; correct inaccurate personal information; request deletion of your personal information; object to or restrict certain processing; and receive your data in a portable format. To exercise these rights, contact us at privacy@getcomposable.com.',
            },
            {
              title: '6. PIPEDA and Canadian Privacy',
              body: 'We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA). Our Privacy Officer can be reached at privacy@getcomposable.com. We will acknowledge your privacy request within 5 business days and respond fully within 30 calendar days.',
            },
            {
              title: '7. GDPR',
              body: 'For customers in the European Economic Area or United Kingdom, we act as a data processor under your instructions as the data controller. We offer Data Processing Agreements (DPAs) to all enterprise customers. Contact us to request a DPA.',
            },
            {
              title: '8. Contact Us',
              body: 'If you have questions about this Privacy Policy or our data practices, contact our Privacy Officer at: privacy@getcomposable.com | Composable Technologies Inc., Toronto, Ontario, Canada',
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="font-display text-xl font-bold text-ink-950 mb-3">{section.title}</h2>
              <p className="text-ink-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
