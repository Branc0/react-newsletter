import Stripe from 'stripe';
import { version } from '../../package.json'

console.log(process.env.STRIPE_API_KEY)
export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
});