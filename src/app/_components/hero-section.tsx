import { Typography } from "@/components/typography";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const HeroSection = () => {
  return (
    <section className="relative bg-[#F7C24B] overflow-hidden bg-[url('/hero-man.jpg')] bg-no-repeat bg-size-[100%_110%]">
      <Container type="default">
        <div className="flex items-center min-h-[620px]">

          

          {/* TEXT */}
          <div className="ml-auto max-w-[520px] text-right lg:text-left">

            <Typography
              heading="h1"
              className="text-[40px] leading-[48px] lg:text-[64px] lg:leading-[72px] font-semibold text-black"
            >
              Listen to the{" "}
              <span className="text-blue-500">amazing</span>
              <br />
              music sound.
            </Typography>

            <p className="mt-4 text-[16px] text-black/70">
              Experience music like never before
            </p>

            <div className="mt-8">
              <Button
                variant="black"
                className="px-10 py-3 text-[16px]"
              >
                Shopping Now
              </Button>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};