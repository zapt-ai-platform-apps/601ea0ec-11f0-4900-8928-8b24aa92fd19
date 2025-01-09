import Razorpay from 'razorpay';
import { authenticateUser } from './_apiUtils.js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    const amount = req.body.amount;

    const options = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `rcptid_${user.id}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}