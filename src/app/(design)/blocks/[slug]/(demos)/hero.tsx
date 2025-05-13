import { Hero } from "@/components/hero";

export const hero = {
  name: "hero",
  components: {
    Default: (
      <Hero
        title="Build a Quickbooks Design System"
        description="This starter helps you create a Quickbooks design system so you can distribute your custom components, hooks, pages, and other files to any React project"
        buttonText="Learn more"
        buttonLink="#sale"
        backgroundImage="/assets/hero.png"
      />
    ),
  },
};
