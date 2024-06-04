const express=require("express")
const router=express.Router()
const Stripe=require('stripe')

const stripe=new Stripe("sk_test_51OpA5WSBr8NCIPst073SDSwvMGESe3VQFNSJx8aPhFZPwY2C01aUhuNc7I28HOFUN1aR034nmo5ozrua6yA85y4g00RkNbaNqP")
router.post( '/', async (req,res)=>{
    try {
        const params={
            submit_type:'pay',
            mode:"payment",
            customer: "cus_PeVqxiUGXSoKAV",
            payment_method_types:[ 'card'],
            billing_address_collection:"auto",
            shipping_options:[{shipping_rate:"shr_1OpB6iSBr8NCIPstl0GvTlNE"}],
            line_items: req.body.map((item)=>{
                return{
                    price_data :{
                        currency:"inr",
                        product_data:{
                            name:item.name,
                            // image:[item.image]
                        },
                        unit_amount:item.price*100,
                    },
                    adjustable_quantity:{
                        enabled:true,
                        minimum:1,
                    },
                    quantity:item.qty
                }
            }),
            success_url: `http://localhost:3000/success`,
            cancel_url:`http://localhost:3000/cancel`
        }
        const session=await stripe.checkout.sessions.create(params)

        res.status(200).json(session.id)    
    } catch (error) {
        res.status(error.statusCode || 500).json(error.message)
    }
    })

module.exports = router;