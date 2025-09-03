import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function UserConduct() {
    const sections = {
        navigationTitle: "User Conduct",
        navigationItems: [
            { title: "Prohibited Activities", href: "#user-responsibilities", level: 0 },
            { title: "Privacy Policy", href: "#account-creation", level: 1 },
            { title: "Usage Guidelines", href: "#usage-guidelines", level: 2 },
            { title: "Account Integrity", href: "#liability-limitations", level: 3 },
            { title: "Reporting Violations", href: "#amendments-policy", level: 4 },
        ]
    }
    const navigationItems = [
        { title: "Prohibited Activities", href: "#user-responsibilities", level: 0 },
        { title: "Privacy Policy", href: "#account-creation", level: 1 },
        { title: "Usage Guidelines", href: "#usage-guidelines", level: 2 },
        { title: "Account Integrity", href: "#liability-limitations", level: 3 },
        { title: "Reporting Violations", href: "#amendments-policy", level: 4 },
    ]
    return (
        <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
                <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
                    <TermsSection
                        title="User Conduct"
                        subtitle="ChamaConnect fosters financial collaboration and trust. You agree to:"
                        content={[
                            {
                                heading: "",
                                text: "",
                                list: [
                                    "Use the platform respectfully and in line with group policies. ",
                                    "Avoid prohibited activities, including fraud, harassment, or attempts to undermine blockchain integrity. ",
                                    "Comply with Kenyan laws, including the Computer Misuse and Cybercrimes Act, 2018.",
                                ],
                            },
                            {
                                heading: "Prohibited Activities",
                                text: "Do not use ChamaConnect for fraud, money laundering, or harassment. Attempts to hack or manipulate the blockchain ledger will result in account suspension and legal action.",
                            },
                            {
                                heading: "Privacy Policy",
                                text: "ChamaConnect, operated by MUIAA Ltd., prioritizes your privacy by collecting only essential data—like your name, mobile number, email, and transaction details—to enable table banking features such as savings, loans, and group management, all secured by blockchain encryption and compliant with Kenya’s Data Protection Act, 2019.",
                                footer: "We use this information, with your explicit consent, to process transactions, provide financial reports, and send updates via SMS or email, while anonymized data may improve our services, never sharing personal details with third parties for marketing without permission."

                            },
                            {
                                heading: "Account Integrity",
                                text: "To maintain the security of your table banking group, keep your login details—including passwords and PINs—confidential and do not share them with unauthorized individuals. If you notice any suspicious activity, such as unrecognized transactions or login attempts, report it to us immediately at +254-723-655011 or admin@muiaa.com to protect your group’s funds and data",
                            },
                            {
                                heading: "Reporting Violations",
                                text: "If you suspect misuse of ChamaConnect (e.g., fraud, data breaches), report it to us immediately at “+254-723-655011” or “admin@muiaa.com”. We will investigate and take appropriate action, including notifying the ODPC if required.",
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

