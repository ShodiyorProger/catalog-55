import { Instagram, Facebook, Youtube } from "lucide-react";
import { Container } from "@/components/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#141718] text-white">
      <Container type="default">
        <div className="py-12 lg:py-20">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:text-left">
                <div className="flex items-center gap-4">
                  <span className="text-[28px] font-medium leading-none text-white">
                    3legant.
                  </span>
                  <span className="hidden h-6 w-px bg-[#6C7275] lg:block" />
                </div>

                <p className="text-[14px] leading-5.5 text-[#E8ECEF]">
                  Headphone Store
                </p>
              </div>

              <nav className="w-full lg:w-auto">
                <ul className="flex flex-col items-center gap-6 text-[14px] leading-5.5 text-[#FEFEFE] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-end">
                  <li>
                    <Link href="#" className="transition-opacity hover:opacity-70">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition-opacity hover:opacity-70">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition-opacity hover:opacity-70">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition-opacity hover:opacity-70">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition-opacity hover:opacity-70">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="h-px w-full bg-[#6C7275]" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:text-left">
                <p className="text-[12px] leading-5 text-[#E8ECEF]">
                  Copyright © 2023 3legant. All rights reserved
                </p>

                <Link
                  href="#"
                  className="text-[12px] font-semibold leading-5 text-[#FEFEFE] transition-opacity hover:opacity-70"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="#"
                  className="text-[12px] font-semibold leading-5 text-[#FEFEFE] transition-opacity hover:opacity-70"
                >
                  Terms of Use
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6">
                <Link href="#" className="transition-opacity hover:opacity-70" aria-label="Instagram">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-70" aria-label="Facebook">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-70" aria-label="Youtube">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}