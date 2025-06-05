import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this app free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, you can get started for free with essential features. We also offer a Pro plan with advanced capabilities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can I access my bookmarks on multiple devices?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Your data syncs across all your devices so you can access your bookmarks anytime, anywhere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer browser extensions?</AccordionTrigger>
            <AccordionContent>
              Yes! We support Chrome, Firefox, and Edge extensions to save bookmarks in one click.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is my data private and secure?</AccordionTrigger>
            <AccordionContent>
              We take security seriously. Your data is encrypted, and we do not share it with third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
