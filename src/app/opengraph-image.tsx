import { siteConfig } from "@/config/site";
import { renderSocialImage, SOCIAL_IMAGE_SIZE } from "@/lib/seo/social-image";

export const alt = siteConfig.seo.ogImageAlt;
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderSocialImage();
}
