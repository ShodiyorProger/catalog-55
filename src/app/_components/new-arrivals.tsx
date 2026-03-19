import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Skullcandy - Crusher anc 2",
    price: "$299.99",
    image: "/Crusher anc 2.png"
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
  }
]

export const NewArrivals = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-semibold">
            New Arrivals
          </h2>

          <div className="flex gap-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto">

          {products.map((item) => (
            <div
              key={item.id}
              className="w-65 shrink-0"
            >

              <div className="bg-[#F3F5F7] p-6 relative">

                <span className="absolute top-4 left-4 bg-white text-xs px-3 py-1 font-bold">
                  NEW
                </span>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto"
                />

                <button type="button" className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 rounded-lg">
                  Add to cart
                </button>

              </div>

              <div className="mt-4">
                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="font-medium">
                  {item.price}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}