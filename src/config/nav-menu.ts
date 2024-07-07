import type { NavMenuConfig } from "@/types";
import { getCategories } from "@/lib/fetchers";
const categories = await getCategories();

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "ページ一覧",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Newsletter",
          href: "/newsletter",
          description:
            "A newsletter form using Astro DB & Simple Stack Form. Counter display!",
          image: "/images/examples/newsletter.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "カテゴリー",
      items: [
        ...categories.map((category) => ({
          title: category,
          href: `/blog/category/${category}`,
        })),
      ],
    },
  ],
  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
