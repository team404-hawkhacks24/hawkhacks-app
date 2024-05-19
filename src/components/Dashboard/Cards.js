import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Charities List",
    description:
      "List of all ongoing charities taking place on our Curo.",
    link: "/charity/list",
  },
  {
    title: "Make Donation",
    description:
      "Show your generuosity by donating to the needy and contribute to the society",
    link: "/make-donation",
  },
  {
    title: "My Donations",
    description:
      "List of all donations done by you, through Curo",
    link: "/charity/my",
  }
];
