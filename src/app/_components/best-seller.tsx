import Image from "next/image"
import { Container } from "@/components/container"

const products = [
  {
    id: 1,
    title: "Sony - WH-1000XM5 Wireless",
    price: "$299.99",
    image: "/Sony1.png"
  },
  {
    id: 2,
    title: "Beats Studio Pro",
    price: "$349.99",
    image: "/Beats.jpg"
  },
  {
    id: 3,
    title: "Sony WH-CH720N",
    price: "$149.99",
    image: "/Sony.png"
  },
  {
    id: 4,
    title: "Skullcandy Rail Earbuds",
    price: "$79.99",
    image: "/Rail.png"
  },
  {
    id: 5,
    title: "Beats Studio Pro",
    price: "$224.99",
    image: "/Fitpo.png"
  },
  {
    id: 6,
    title: "JBL Reflect Flow Pro",
    price: "$179.95",
    image: "/Jbl.png"
  },
  {
    id: 7,
    title: "Bose QuietComfort",
    price: "$349.00",
    image: "/Bose.png"
  },
  {
    id: 8,
    title: "AKG Y600NC",
    price: "$349.99",
    image: "/AKG.png"
  }
]

export const BestSeller = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-10 text-4xl font-semibold">Best Seller</h2>

        <div className="grid grid-cols-4 gap-x-6 gap-y-12">
          {products.map((item) => (
            <div key={item.id}>
              <div className="relative h-80 bg-[#F3F5F7] px-6 pt-14 pb-6">
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold">
                  HOT
                </span>

                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 text-sm tracking-[2px]">★★★★★</div>
                <p className="font-semibold leading-6">{item.title}</p>
                <p className="mt-1 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
