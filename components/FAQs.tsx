import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center  my-20">
      <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
        <FaCircleQuestion className="" />
        FAQ's
      </p>
      <h2 className="font-medium text-4xl leading-[44px] text-center w-[600px]">
        Have Questions? We’re Here to Clear Your Doubts.{" "}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-[960px] w-full my-14 text-base gap-5 flex flex-col "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            I have a Figma design, can you turn it into a live website?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can you help redesign my existing website or product?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is your service refundable?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How long does a typical project take?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
