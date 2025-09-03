"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
    return (
        <section className="flex flex-col items-center w-full py-12 md:py-28">
            <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-center text-gradient mb-8">
                    FAQs
                </h2>
                <p className="text-center text-base text-[var(--foreground)] mb-8">
                    Find answers to your questions about the MUAA Table Banking
                    Project and its features.
                </p>

                <div className="flex flex-col w-full">
                    <FAQItem
                        question="What is Table Banking?"
                        answer="Table banking is a community-based savings and loan system where members contribute to a common fund. This fund is then used to provide loans to members, promoting financial inclusion and mutual support. It allows for flexible savings and borrowing tailored to the needs of the group."
                    />

                    <FAQItem
                        question="How does Chama Connect work?"
                        answer="Chama Connect is a digital platform that facilitates table banking by allowing users to manage savings, loans, and financial records online. Members can easily track contributions, loans, and repayments through the app. The platform is designed to be user-friendly and accessible from both mobile and web devices."
                    />

                    <FAQItem
                        question="Is my data safe?"
                        answer="Yes, your data is secure with Chama Connect. We implement advanced encryption and security protocols to protect user information. Additionally, we comply with data protection regulations to ensure your privacy."
                    />

                    <FAQItem
                        question="Can I customize settings?"
                        answer="Absolutely! Chama Connect allows group administrators to customize settings according to their group's constitution and policies. This includes adjusting loan terms, savings rates, and member roles. Flexibility is key to meeting the unique needs of each group."
                    />

                    <FAQItem
                        question="What are the fees?"
                        answer="Chama Connect operates on a transparent fee structure. Fees may vary based on the services used, such as transaction fees or premium features. We strive to keep costs low to benefit all members."
                    />

                    <FAQItem
                        question="How do I join?"
                        answer="Joining Chama Connect is easy! Simply download the app or visit our website to create an account. Follow the prompts to set up your group and start managing your finances."
                    />

                    <FAQItem
                        question="What features are included?"
                        answer="Chama Connect includes features such as savings tracking, loan management, financial reporting, and member communication tools. The platform also offers emergency fund management and customizable group settings. Our goal is to provide a comprehensive financial management solution."
                    />

                    <FAQItem
                        question="Is there customer support?"
                        answer="Yes, we offer dedicated customer support to assist you with any questions or issues. You can reach us via email, chat, or phone. Our support team is trained to help you navigate the platform effectively."
                    />

                    <FAQItem
                        question="Can I access reports?"
                        answer="Yes, Chama Connect provides detailed financial reports that help you track your group's performance. You can access reports on savings, loans, and member contributions at any time. The feature aids in transparency and accountability."
                    />

                    <FAQItem
                        question="What is blockchain technology?"
                        answer="Blockchain technology is a decentralized digital ledger that records transactions across multiple computers. It ensures the integrity and security of data by making it nearly impossible to alter past records. Chama Connect utilizes blockchain to enhance transparency and trust among members."
                    />

                    <FAQItem
                        question="How to reset password?"
                        answer="To reset your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email to create a new password. If you encounter any issues, our support team is here to help."
                    />

                    <FAQItem
                        question="Can I invite members?"
                        answer="Yes, you can easily invite new members to your group through the app. Simply enter their details and send an invitation. Once they accept, they can join your table banking activities."
                    />

                    <FAQItem
                        question="What if I forget?"
                        answer="If you forget your account details, you can use the recovery options available on the login page. Follow the prompts to regain access to your account. Our support team is also available to assist you."
                    />

                    <FAQItem
                        question="Is there a mobile app?"
                        answer="Yes, Chama Connect has a mobile app available for both Android and iOS devices. The app provides full access to all features, allowing you to manage your finances on the go. Download it from your device's app store today!"
                    />

                    <FAQItem
                        question="How to contact support?"
                        answer="You can contact our support team through the 'Contact Us' section on our website. We offer multiple channels including email and live chat. Our team is ready to assist you with any inquiries."
                    />
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border-b border-[#93F1AD] py-4 w-full">
            <summary className="flex justify-between items-center cursor-pointer list-none w-full text-[var(--foreground)]">
                <span className="font-medium">{question}</span>
                <ChevronDown className="h-5 w-5 text-gradient group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-3 text-gray-400 text-sm leading-relaxed w-full">
                {answer}
            </div>
        </details>
    );
}
