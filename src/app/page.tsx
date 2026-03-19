import { BestSeller } from "./_components/best-seller";
import { FeaturesStrip } from "./_components/features-strip";
import { HeroSection } from "./_components/hero-section";
import { NewArrivals } from "./_components/new-arrivals";
import Newsletter from "./_components/newsletter";
import {PromotionBanner} from "./_components/promotion-banner";
import { ShopCollection } from "./_components/shop-collection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <ShopCollection />
      <BestSeller />
      <PromotionBanner />
      <FeaturesStrip />
      <Newsletter />
    </>
  );
}