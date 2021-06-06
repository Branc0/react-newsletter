import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';


interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.new</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>Ger Access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1Iz885DU0BONnTu1FzcKcUfO');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }


  return {
    props: {
      product,
    }
  }
}