import { TermsHero } from "@/components/terms/hero";
import { TermsContent } from "@/components/terms/content";
import { PrivacyPolicy } from "@/components/terms/privacy";
import { PaymentPolicy } from "@/components/terms/payment";
import { UserConduct } from "@/components/terms/conduct";
import { LiabilityLimitation } from "@/components/terms/liability";
import { ModificationOfTerms } from "@/components/terms/modifications";
import { ApplicableLaws } from "@/components/terms/laws";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <TermsHero
        title="Terms of Use"
        description="Welcome to the Terms and Conditions for ChamaConnect. This agreement outlines the rules and guidelines governing your use of our platform, ensuring a clear understanding of your rights and responsibilities under Kenyan law, including the Data Protection Act, 2019."
      />
      <TermsContent />
      <PrivacyPolicy />
      <PaymentPolicy />
      <UserConduct />
      <LiabilityLimitation />
      <ModificationOfTerms />
    </main>
  );
}
