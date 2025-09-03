import { TermsNavigation } from "./navigation"
import { TermsSection } from "./section"

export function PaymentPolicy() {
    const sections = {
        navigationTitle: "Key Payment Policies",
        navigationItems: [
        { title: "Payment Terms", href: "#payment-terms", level: 0 },
        { title: "Subscription Fees", href: "#subscription-fees", level: 1 },
        { title: "Refund Policy", href: "#refund-policy", level: 2 },
        { title: "Billing Process", href: "#billing-process", level: 3 },
        { title: "User Responsibilities", href: "#user-responsibilities", level: 4 },
    ]}
    return (
        <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 container">
                <div className="w-full lg:w-auto order-1 lg:order-none sticky lg:top-24">
                    <TermsNavigation items={sections.navigationItems} title={sections.navigationTitle} />
                </div>
                <div className="flex-1 w-full space-y-8 md:space-y-16 order-2 lg:order-none">
                    <TermsSection
                        title="Payment Terms"
                        subtitle="To participate fully in your table banking group, contributions must be made through mobile money platforms like M-Pesa or other supported methods approved by ChamaConnect."
                        content={[
                            {
                                heading: "Subscription Fees",
                                text: "ChamaConnect offers a free basic plan for small groups. Premium features, like advanced analytics or smart contracts integration, may incur a small monthly fee—details are available on our Pricing page.",
                            },
                            {
                                heading: "Refund Policy",
                                text: "",
                                list: [
                                    "Refunds for premium subscriptions are available within 7 days of payment during a free trial or if dissatisfied, provided you notify us at “admin@muiaa.com”",
                                    "No refunds are issued for group contributions processed via the platform.",
                                ],
                            },
                            {
                                heading: "Billing Process",
                                text: "For premium users, billing occurs monthly to maintain access to advanced features. You’ll receive a notification at least 7 days before any deduction, giving you ample time to review your subscription, adjust your plan, or ensure your payment method is ready, keeping your experience with ChamaConnect uninterrupted.",
                            },
                            {
                                heading: "User Responsibilities",
                                text: "It’s your responsibility to maintain sufficient funds in your payment account—whether mobile money or another method—to cover contributions and fees, ensuring continuous access to loans, analytics, and group tools. If a payment issue arises, notify us of any disputes within 14 days of the transaction by contacting admin@muiaa.com or +254-723-655011, so we can resolve it promptly and fairly.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

