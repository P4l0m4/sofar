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
        label: "Corporate charters",
        link: "/services/corporate-jet-charters",
        icon: "business_center",
        alt: "menu icon corporate charters",
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
        label: "Off-fleet requests",
        link: "/services/off-fleet-requests",
        icon: "network_node",
        alt: "menu icon off fleet requests",
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
        label: "Light Jets",
        link: "/aircraft/light-jets",
        icon: "airplanemode_active",
        alt: "menu icon light jets",
      },
      {
        label: "Midsize Jets",
        link: "/aircraft/midsize-jets",
        icon: "airplanemode_active",
        alt: "menu icon midsize jets",
      },
      {
        label: "Super Midsize Jets",
        link: "/aircraft/super-midsize-jets",
        icon: "airplanemode_active",
        alt: "menu icon super midsize jets",
      },
      {
        label: "Heavy Jets",
        link: "/aircraft/heavy-jets",
        icon: "airplanemode_active",
        alt: "menu icon heavy jets",
      },
      {
        label: "Ultra Long Haul Jets",
        link: "/aircraft/ultra-long-haul-jets",
        icon: "airplanemode_active",
        alt: "menu icon ultra long jets",
      },
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
    ],
  },
  {
    label: "Our story",
    link: "/our-story",
    icon: "info",
    alt: "menu icon about-us",
    children: [
      {
        label: "Our story",
        link: "/our-story",
        icon: "book_2",
        alt: "menu icon our story",
      },
      {
        label: "Blog",
        link: "/blog",
        icon: "article",
        alt: "menu icon blog",
      },
      {
        label: "Careers",
        link: "/our-story/careers",
        icon: "alternate_email",
        alt: "menu icon contact",
      },
      {
        label: "Our fleet",
        link: "/our-story/our-fleet",
        icon: "airplanemode_active",
        alt: "menu icon our fleet",
      },
      {
        label: "Operations",
        link: "/our-story/operations",
        icon: "lifebuoy-fill",
        alt: "menu icon operations",
      },
    ],
  },
];
</script>
<template>
  <BurgerMenu />
  <main>
    <slot />
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NJGG6P35"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        title="Google Tag Manager"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
  </main>
  <FooterComponent :menuItems="menuItems" />
</template>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  margin: auto;
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
