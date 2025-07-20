import jwt from 'jsonwebtoken';

// ✅ Login Seller: /api/seller/login
export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

            // ✅ Set secure cookie
            res.cookie('sellerToken', token, {
                httpOnly: true,
                secure: true,        // ✅ required for HTTPS on Vercel
                sameSite: 'None',    // ✅ required for cross-origin
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            return res.json({ success: true, message: "Logged In" });
        } else {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Seller Auth Check: /api/seller/is-auth
export const isSellerAuth = async (req, res) => {
    try {
        return res.json({ success: true, user: req.user });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Logout Seller: /api/seller/logout
export const sellerlogout = async (req, res) => {
    try {
        // ✅ Clear sellerToken cookie
        res.clearCookie('sellerToken', {
            httpOnly: true,
            secure: true,       // ✅ Required for HTTPS
            sameSite: 'None',   // ✅ Required for cross-origin
        });

        return res.json({ success: true, message: "Logged Out" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
