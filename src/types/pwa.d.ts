// pwa.d.ts
import "nuxt/config";

declare module "nuxt/config" {
  interface NuxtConfig {
    pwa?: {
      manifest?: {
        name: string;
        short_name: string;
        lang: string;
        display: string;
        theme_color: string;
        background_color: string;
        description: string;
        icons: Array<{
          src: string;
          sizes: string;
          type: string;
        }>;
      };
      workbox?: Record<string, unknown>;
    };
  }
}
