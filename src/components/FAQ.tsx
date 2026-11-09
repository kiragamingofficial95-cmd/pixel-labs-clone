import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { FAQ_ITEMS } from '../data/content';

export const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-y border-[hsl(60_5%_89%)] bg-[hsl(60_20%_97%)] py-24 sm:py-32"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeader
            index="[04]"
            label="FAQ"
            title="Questions, answered."
            description="The six things people ask before they book. If yours is missing, email us and a human will reply."
          />
        </div>

        <Reveal delay={0.08}>
          <AccordionPrimitive.Root type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${idx}`}
                className="border-b border-[hsl(60_5%_89%)] px-1 last:border-b-0"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="h4 group flex flex-1 items-center justify-between py-5 text-left text-foreground hover:no-underline outline-none">
                    <span className="flex flex-1 items-center justify-between gap-4">
                      {item.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[hsl(0_0%_4%/0.12)] bg-white text-foreground transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-[hsl(18_100%_50%)] group-data-[state=open]:text-[hsl(18_100%_50%)]">
                        <Plus size={13} />
                      </span>
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionPrimitive.Content className="body overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 pr-10">{item.a}</div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
};
