<script setup>
const menuItems = [
  {
    label: "Booking",
    link: "/booking",
    icon: "airplane_ticket",
    alt: "menu icon booking",
  },
  {
    label: "Services",
    link: "/booking",
    icon: "concierge",
    alt: "menu icon booking",
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
    label: "Airports",
    link: "/booking",
    icon: "map",
    alt: "menu icon booking",
  },
  {
    label: "Aircraft",
    link: "/booking",
    icon: "airlines",
    alt: "menu icon booking",
    children: [
      {
        label: "PC12",
        link: "/services/pc12",
        icon: "airplanemode_active",
        alt: "menu icon pc12",
      },
      {
        label: "Phenom 100",
        link: "/services/phenom-100",
        icon: "airplanemode_active",
        alt: "menu icon phenom 100",
      },
      {
        label: "Phenom 300",
        link: "/services/phenom-300",
        icon: "airplanemode_active",
        alt: "menu icon phenom 300",
      },
      {
        label: "Safety",
        link: "/services/safety",
        icon: "health_and_safety",
        alt: "menu icon safety",
      },
    ],
  },
  {
    label: "About us",
    link: "/booking",
    icon: "info",
    alt: "menu icon booking",
    children: [
      {
        label: "Our story",
        link: "/services/our-story",
        icon: "book_2",
        alt: "menu icon our story",
      },
      {
        label: "Blog",
        link: "/services/blog",
        icon: "article",
        alt: "menu icon blog",
      },
      {
        label: "Contact",
        link: "/services/contact",
        icon: "alternate_email",
        alt: "menu icon contact",
      },
    ],
  },
];
</script>
<template>
  <MobileNavigation :menuItems="menuItems" />
  <DesktopNavigation :menuItems="menuItems" />
  <main>
    <slot />
  </main>
</template>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
