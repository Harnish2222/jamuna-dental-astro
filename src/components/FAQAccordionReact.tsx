import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordionReact({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="bg-white border border-gray-100 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-[#0080B5]/30 transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-bold text-[#072674] hover:text-[#0080B5] hover:no-underline text-base py-4 flex gap-4 items-center">
              <div className="flex-1 flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0080B5] flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-[#0080B5] group-data-[state=open]:text-white transition-colors">
                  <MessageCircleQuestion className="w-4 h-4" />
                </div>
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-6 pl-12 pr-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
