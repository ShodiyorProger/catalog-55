import Image from "next/image";
import { Container } from "@/components/container";

export const ShopCollection = () => {
  return (
    <section className="py-16">
      <Container type="default">
        <h2 className="mb-10 text-[40px] font-medium leading-11 text-[#141718]">
          Shop Collection
        </h2>

        <div className="grid grid-cols-[1fr_1fr] gap-6">
          <div className="relative h-166 overflow-hidden bg-[#F7F7F7]">
            <Image
              src="/headband.png"
              alt="Headband"
              fill
              className="object-contain p-10"
            />

            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-[34px] font-medium leading-9.5 text-[#141718]">
                Headband
              </h3>

              <button type="button" className="mt-3 inline-flex items-center gap-2 border-b border-[#141718] pb-1 text-[16px] font-medium text-[#141718]">
                Collection <span>→</span>
              </button>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="relative h-79.75 overflow-hidden bg-[#F3F5F7]">
              <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2">
                <h3 className="text-[34px] font-medium leading-9.5 text-[#141718]">
                  Earbuds
                </h3>

                <button type="button" className="mt-3 inline-flex items-center gap-2 border-b border-[#141718] pb-1 text-[16px] font-medium text-[#141718]">
                  Collection <span>→</span>
                </button>
              </div>

              <Image
                src="/02.png"
                alt="Earbuds"
                fill
                className="object-contain p-10"
              />
            </div>

            <div className="relative h-79.75 overflow-hidden bg-[#F3F5F7]">
              <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2">
                <h3 className="text-[34px] font-medium leading-9.5 text-[#141718]">
                  Accessories
                </h3>

                <button type="button" className="mt-3 inline-flex items-center gap-2 border-b border-[#141718] pb-1 text-[16px] font-medium text-[#141718]">
                  Collection <span>→</span>
                </button>
              </div>

              <Image
                src="/03.png"
                alt="Accessories"
                fill
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};