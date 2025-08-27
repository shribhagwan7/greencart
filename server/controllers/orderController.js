import Order from "../models/Order.js"
import Product from "../models/Product.js"
import stripe from "stripe"

// Place Order COD: /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items, address } = req.body;
        if (!address || items.length === 0) {
            return res.json({ success: false, message: "Invalid data" })
        }

        // Calculate Amount Using Items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // Add Tax Charge (2%)
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        })

        return res.json({ success: true, message: "Order Placed Successfully" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        })
        .populate("items.product address")
        .sort({ createdAt: -1 });

        // Filter out items with null product
        const cleanedOrders = orders.map(order => ({
            ...order._doc,
            items: order.items.filter(item => item.product != null)
        }));

        res.json({ success: true, orders: cleanedOrders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// Get All Orders (for seller / admin) : /api/order/seller
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
