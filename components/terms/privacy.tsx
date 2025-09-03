import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function PrivacyPolicy() {
    const sections = {
        navigationTitle: "Privacy Policy",
      navigationItems: [
        { title: "Privacy Policy", href: "#privacy-policy", level: 0 },
        { title: "Data Collection", href: "#data-collection", level: 1 },
        { title: "Data Usage", href: "#data-usage", level: 2 },
        { title: "Data Protection", href: "#data-protection", level: 3 },
        { title: "User rights", href: "#user-rights", level: 4 },
      ],
    }

    return (
        <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
                <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
                    <TermsSection
                        title="Privacy Policy"
                        subtitle="At MUIAA, we value your privacy. This policy explains how we collect, use, and protect your personal information to deliver a secure table banking experience.
"
                        content={[
                            {
                                heading: "Data Collection",
                                text: "We collect your name, phone number, email, and transaction details to manage your account and facilitate group activities. This data helps us personalize your experience and ensure smooth operations.",
                            },
                            {
                                heading: "Data Usage",
                                text: "Your information is used to process transactions, provide group insights, and send you updates about your account. We may also use anonymized data to improve our services.",
                                list: [
                                    "Use the platform for illegal activities (e.g., fraud, money laundering).",
                                    "Attempt to bypass security measures or manipulate the blockchain ledger.",
                                    "Share misleading or harmful content within group interactions.",
                                ],
                                footer: "Breaches may lead to account suspension or termination and legal action under Kenyan law.",
                            },
                            {
                                heading: "Data Protection",
                                text: "In accordance with the Data Protection Act, 2019, and ODPC guidelines:",
                                list: [
                                    "Consent: We process your personal data (e.g., name, phone number, transaction details) only with your explicit consent, which you provide during registration. You may withdraw consent by contacting us, subject to legal obligations.",
                                    "Purpose Limitation: Data is used solely for table banking purposes (e.g., savings, loans, reporting) and service improvement.",
                                    "Security: Blockchain encryption and additional safeguards protect your data from unauthorized access or breaches.",
                                ],
                            },
                            {
                                heading: "User Rights",
                                text: "Under Kenyan law, you have the right to:",
                                list: [
                                    "Access your personal data held by us.",
                                    "Request correction or deletion of inaccurate data.  ",
                                    "Object to processing that violates your privacy rights.",
                                ],
                                footer: "Exercise these rights by contacting us at “admin@muiaa.com”.",
                            },
                        ]}
                    />
                </div>
                <div className="w-full lg:w-auto order-1 lg:order-none sticky lg:top-24">
                    <TermsNavigation 
                        items={sections.navigationItems} 
                        title={sections.navigationTitle}
                    />
                </div>

            </div>
        </section>
    )
}

