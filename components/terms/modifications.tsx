import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function ModificationOfTerms() {
    const sections = {
        navigationTitle: "Terms Policy",
        navigationItems: [
        { title: "Notification of Changes", href: "#user-responsibilities", level: 0 },
        { title: "User Agreement", href: "#account-creation", level: 1 },
        { title: "Limitation of Liability", href: "#liability-limitations", level: 2 },
        { title: "Governing Law", href: "#amendments-policy", level: 3 },
    ]}
    return (
        <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
                <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
                    <TermsSection
                        title="Modification of Terms"
                        subtitle="ChamaConnect reserves the right to modify these Terms to enhance our table banking platform or comply with Kenyan regulations, such as the Data Protection Act, 2019."
                        content={[
                            {
                                heading: "Notification of Changes",
                                text: "When significant updates occur, such as new features or legal requirements, we’ll notify you at least 14 days in advance through email, SMS, or in-app alerts, as mandated by the ODPC. This gives you time to review changes affecting your use of group administration or financial reporting tools, ensuring transparency and consent.",
                            },
                            {
                                heading: "User Agreement",
                                text: "By continuing to use ChamaConnect after notified changes take effect, you agree to the revised Terms. This mutual understanding supports our mission to provide a secure, blockchain-driven platform for Kenyan table banking groups while adapting to your evolving needs.",
                            },
                            {
                                heading: "Limitation of Liability",
                                text: "Our liability remains limited to what Kenyan law allows, excluding responsibility for indirect damages or losses from unforeseen events. This ensures ChamaConnect can focus on delivering reliable services like real-time financial reports and tamper-proof transaction records without undue risk from external factors.",
                            },
                            {
                                heading: "Governing Law",
                                text: "All modifications to these Terms remain under Kenyan jurisdiction, with disputes resolved in Kenyan courts or through alternative methods. This consistency reinforces ChamaConnect’s commitment to operating legally and fairly within Kenya’s legal system.",
                            },
                        ]}
                    />
                </div>
                <div className="w-full lg:w-auto order-1 lg:order-none sticky lg:top-24">
                    <TermsNavigation items={sections.navigationItems} title={sections.navigationTitle} />
                </div>
            </div>
        </section>
    )
}

