import { NextResponse } from "next/server"
import { stripe } from "../../../../lib/stripe"

export const POST = async (
    req,
    { params }
) => {
    try {

        const { price_id } = await params


        const line_items = [
            {
                price: price_id,
                quantity: 1,
            }
        ];

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}?success=1`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}?canceled=1`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.log("[COURSE_CHECKOUT]", error)
        return new NextResponse("Internal Error", { status: 500 })

    }
}