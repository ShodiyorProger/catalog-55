import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Link from "next/link"

export const Sale = () => {
    return <div className="bg-primary py-2">
        <Container type="default">
            <Flex justify={"center"} items={"center"} className="gap-3">
                <span>Icon</span>
                <p className="text-[14px] font-semibold leading-5.5 text-white">
                    30% off storewide — Limited time!
                </p>

                <Link href={"#!"} className="inline-flex gap-1 items-center text-[14px] leading-6 font-semibold text-[#FFAB00] border-b pb-1 border-b-[#FFAB00]">
                    <span>
                        Shop Now
                    </span>
                    <span>Icon</span>
                </Link>
            </Flex>
        </Container>
    </div>
}