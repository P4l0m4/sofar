import { defineStore } from "pinia";
export const useMenuItemsStore = defineStore("menu", {
  state: () => {
    return {
      menuItems: [
        {
          label: "Booking",
          link: "/booking",
          icon: "airplane_ticket",
          alt: "menu icon booking",
        },
        {
          label: "Services",
          link: "/services",
          icon: "concierge",
          alt: "menu icon services",
          children: [
            {
              label: "Private jet charters",
              link: "/services/private-jet-charters",
              icon: "award_star",
              alt: "menu icon private jet charters",
            },
            {
              label: "Business charters",
              link: "/services/business-charters",
              icon: "business_center",
              alt: "menu icon business charters",
            },
            {
              parent: "services",
              label: "Family jet charters",
              link: "/services/family-jet-charters",
              icon: "group_add",
              alt: "menu icon family jet charters",
            },
            {
              parent: "services",
              label: "Empty legs",
              link: "/services/empty-legs",
              icon: "flight_class",
              alt: "menu icon empty legs",
            },
            {
              label: "Pet-friendly charters",
              link: "/services/pet-friendly-charters",
              icon: "pet_supplies",
              alt: "menu icon pet-friendly charters",
            },
            {
              label: "Private jet amenities",
              link: "/services/private-jet-amenities",
              icon: "coffee",
              alt: "menu icon private jet amenities",
            },
            {
              label: "Off-fleet requests",
              link: "/services/off-fleet-requests",
              icon: "network_node",
              alt: "menu icon off fleet requests",
            },
            {
              label: "Prices",
              link: "/services/prices",
              icon: "attach_money",
              alt: "menu icon prices",
            },
            {
              label: "Aircraft management",
              link: "/services/aircraft-management",
              icon: "service_toolbox",
              alt: "menu icon aircraft management",
            },
          ],
        },
        {
          label: "Destinations",
          link: "/destinations",
          icon: "map",
          alt: "menu icon destinations",
        },
        {
          label: "Aircraft",
          link: "/aircraft",
          icon: "airlines",
          alt: "menu icon aircraft",
          children: [
            {
              label: "PC12",
              link: "/aircraft/pc12",
              icon: "airplanemode_active",
              alt: "menu icon pc12",
            },
            {
              label: "Phenom 100",
              link: "/aircraft/phenom-100",
              icon: "airplanemode_active",
              alt: "menu icon phenom 100",
            },
            {
              label: "Phenom 300",
              link: "/aircraft/phenom-300",
              icon: "airplanemode_active",
              alt: "menu icon phenom 300",
            },
            {
              label: "Safety",
              link: "/aircraft/safety",
              icon: "health_and_safety",
              alt: "menu icon safety",
            },
          ],
        },
        {
          label: "About us",
          link: "/about-us",
          icon: "info",
          alt: "menu icon about-us",
          children: [
            {
              label: "Our story",
              link: "/about-us/our-story",
              icon: "book_2",
              alt: "menu icon our story",
            },
            {
              label: "Blog",
              link: "/about-us/blog",
              icon: "article",
              alt: "menu icon blog",
            },
            {
              label: "Contact",
              link: "/about-us/contact",
              icon: "alternate_email",
              alt: "menu icon contact",
            },
          ],
        },
      ],
    };
  },
});
