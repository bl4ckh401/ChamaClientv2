import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function LiabilityLimitation() {
    const sections = {
        navigationTitle: "Legal Overview",
        navigationItems: [
        { title: "Disclaimers Notice", href: "#user-responsibilities", level: 0 },
        { title: "Indemnification Clause", href: "#account-creation", level: 1 },
        { title: "Governing Law", href: "#usage-guidelines", level: 2 },
        { title: "Liability Limitations", href: "#liability-limitations", level: 3 },
        { title: "Amendments Policy", href: "#amendments-policy", level: 4 },
    ]}
    return (
        <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
                <div className="w-full lg:w-auto order-1 lg:order-none sticky lg:top-24">
                <TermsNavigation items={sections.navigationItems} title={sections.navigationTitle} />
                </div>
                <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
                    <TermsSection
                        title="Liability Limitations"
                        subtitle="Our liability is limited to the fullest extent permitted by Kenyan law, including the Data Protection Act, 2019, ensuring we focus on delivering secure savings, loan tracking, and group management tools."
                        content={[
                            {
                                heading: "Disclaimers Notice",
                                text: "While we strive for uninterrupted service, ChamaConnect is not liable for disruptions caused by user mistakes or external issues like network failures. We aim for 100% uptime but may need occasional maintenance to enhance features like blockchain security or financial reporting—whenever possible, we’ll notify you in advance via email or in-app alerts to minimize inconvenience.",
                            },
                            {
                                heading: "Indemnification Clause",
                                text: "By using ChamaConnect, you agree to indemnify and hold harmless ChamaConnect and MUIAA Ltd. against any claims, damages, or costs arising from your misuse of the platform, such as violating these Terms or engaging in fraudulent activities.",
                            },
                            {
                                heading: "Governing Law",
                                text: "These Terms of Use are governed by the laws of Kenya, reflecting our commitment to operating within the local legal framework. Any disputes arising from your use of ChamaConnect will be resolved in Kenyan courts or through alternative dispute resolution methods",
                            },
                            {
                                heading: "Amendments Policy",
                                text: "We may revise these Terms to reflect updates in ChamaConnect features—like M-Pesa integration or smart contracts—or changes in Kenyan law. You’ll be notified of significant amendments at least 14 days in advance via email, SMS, or in-app messages, complying with ODPC guidelines, and your continued use of the platform signifies acceptance of the updated Terms.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

