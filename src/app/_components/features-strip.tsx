import { Truck, CreditCard, Lock, Phone } from "lucide-react"

export function FeaturesStrip() {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Free Shipping",
      text: "Order above $200",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Money-back",
      text: "30 days guarantee",
    },
    {
      icon: <Lock size={28} />,
      title: "Secure Payments",
      text: "Secured by Stripe",
    },
    {
      icon: <Phone size={28} />,
      title: "24/7 Support",
      text: "Phone and Email support",
    },
  ]

  return (
    <section className="w-full bg-[#F3F5F7] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {features.map((item, i) => (
            <div
              key={i.toString()}
              className="bg-[#EDEFF1] p-6 sm:p-7 lg:p-8 flex flex-col gap-3 sm:gap-4"
            >
              <div className="text-black">{item.icon}</div>

              <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-black">
                {item.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}