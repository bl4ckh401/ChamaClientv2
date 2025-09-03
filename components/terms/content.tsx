import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function TermsContent() {
  const sections = {
    navigationTitle: "User Responsibilities",
    navigationItems: [
      { title: "User Responsibilities", href: "#user-responsibilities", level: 0 },
      { title: "Account Creation", href: "#account-creation", level: 1 },
      { title: "Usage Guidelines", href: "#usage-guidelines", level: 2 },
      { title: "Liability Limitations", href: "#liability-limitations", level: 3 },
      { title: "Amendments Policy", href: "#amendments-policy", level: 4 },
    ],
  }
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
        <div className="w-full lg:w-auto order-1 lg:order-none sticky lg:top-24">
          <TermsNavigation
            items={sections.navigationItems}
            title={sections.navigationTitle}
          />
        </div>
        <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
          <TermsSection
            title="User Responsibilities"
            subtitle="As a user of ChamaConnect, you agree to provide accurate information during registration, safeguard your account credentials, and use the platform responsibly for lawful purposes. You are responsible for all activities conducted through your account."
            content={[
              {
                heading: "Account Creation",
                text: "To join ChamaConnect, you must create an account using a valid mobile number and email address. Your account gives you access to table banking features, savings tools, and accounting features. Ensure your details are up-to-date to enjoy uninterrupted services.",
              },
              {
                heading: "Usage Guidelines",
                text: "Use ChamaConnet to save, lend, and track funds within your table banking group. Blockchain ensures every transaction is recorded securely.",
                list: [
                  "Use the platform for illegal activities (e.g., fraud, money laundering).",
                  "Attempt to bypass security measures or manipulate the blockchain ledger.",
                  "Share misleading or harmful content within group interactions.",
                ],
                footer: "Breaches may lead to account suspension or termination and legal action under Kenyan law.",
              },
              {
                heading: "Liability Limitations",
                text: "ChamaConnect is not liable for losses due to circumstances beyond our control, such as network outages or unauthorized access due to user negligence. We strive to maintain a reliable platform but recommend safeguarding your account. Our liability is limited to the maximum extent permitted by Kenyan law, including the Data Protection Act, 2019.",
              },
              {
                heading: "Amendments Policy",
                text: "We may update these Terms to reflect new features, legal changes, or operational improvements. You will be notified of material changes via email, SMS, or in-app alerts at least 14 days in advance, as required by the ODPC. Continued use of ChamaConnect after updates signifies your acceptance of the revised Terms.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

