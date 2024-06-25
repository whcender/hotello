import { prismadb } from "@/lib/prismadb"

export const getHotelById = async (hotelid: string) => {
  try {
    const hotel = await prismadb.property.findUnique({
      where: {
        id: hotelid,
      },
    })
    if (!hotel) return null

    return hotel
  } catch (error) {
    console.log("Failed to get hotel", { cause: error })
  }
}
