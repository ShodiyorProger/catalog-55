import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F5F7] py-16 sm:py-20 lg:py-24">

      <img
        src="/newsletter-right.png"
        alt="Girl"
        className="pointer-events-none absolute right-0 bottom-0 hidden md:block h-[230px] lg:h-[330px] w-full"
      />

      <div className="relative z-10 mx-auto w-full max-w-[640px] px-4 text-center">
        
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-medium leading-tight text-black">
          Join Our Newsletter
        </h2>

        <p className="mt-2 text-[14px] sm:text-[16px] text-[#6C7275]">
          Sign up for deals, new products and promotions
        </p>

        <form className="mt-8 flex items-center gap-3 border-b border-[#6C7275] pb-3">
          <Mail size={18} className="text-[#6C7275]" />

          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent text-[14px] text-black outline-none placeholder:text-[#6C7275]"
          />

          <button
            type="submit"
            className="text-[14px] font-medium text-[#141718] hover:opacity-70 transition"
          >
            Signup
          </button>
        </form>

      </div>
    </section>
  );
}