import { Box, Stack,Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import Card from './Card';
import env from './env';

const Home = () => {
const PAYMENT_HOST = env.REACT_APP_PAYMENT_HOST;
const checkoutHandler = async amount => {
      const {
        data: { order },
      } = await axios.post(`${PAYMENT_HOST}/payments/checkout`, {
        amount,
      });
      const options = {
        key:env.REACT_APP_PAYMENT_KEY,
        amount:amount,
        currency: 'INR',
        name: 'Serverless Razorkart',
        description: 'RazorpayIntegration',
        image: 'https://media.licdn.com/dms/image/D560BAQHX1IUMZUYnTA/company-logo_200_200/0/1702442466355?e=1716422400&v=beta&t=jdIrW-ox7ylhPd_Lpcin3rSGLmG_4mDOSGH7A4w2wUQ',
        order_id: order.id,
        callback_url: `${PAYMENT_HOST}/payments/verify`,
        prefill: {
          name: 'AakashDEV',
          email: 'xyz@example.com',
          contact: '+91 99999 99999',
        },
        theme: {
          color: '#1D2025',
        },
      };
  
      var razor = new window.Razorpay(options);
      razor.open();
};

    return(
<Box>
<Heading as="h1" textAlign="center" my={8} fontSize="3xl">
        Razorcart
      </Heading>
  <Stack
    h={'100vh'}
    alignItems="center"
    justifyContent={'center'}
    direction={['column', 'row']}
  >
    <Card
      productname={"Reebok"}
      amount={250}
      img="https://m.media-amazon.com/images/I/61CfTSZIFUL._SY695_.jpg"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Creatine"}
      amount={500}
      img="https://cdn.nutrabay.com/wp-content/uploads/2023/09/NB-NUT-1009-03-01.jpg"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Nike Shoes"}
      amount={300}
      img="https://i.pinimg.com/originals/ef/8a/4e/ef8a4e5929003c4102d571cfd2b998b9.jpg"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Protein Powder"}
      amount={700}
      img="http://www.dmoose.com/cdn/shop/products/Vanilla.jpg?v=1627493748"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Yoga Mat"}
      amount={250}
      img="https://tse4.mm.bing.net/th?id=OIP.M6sQ3xSBckYpE6hT3fKgHwHaHa&pid=Api&P=0&h=180"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Dumbbells Set"}
      amount={1000}
      img="https://i5.walmartimages.com/asr/5c1a3225-6cdb-42c6-86b9-a78260e20db2_1.23e8fa8727b6bb246f8c4602f8f395a7.jpeg"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Running Shorts"}
      amount={250}
      img="https://tse1.mm.bing.net/th?id=OIP.UVVuA7cwOUjJIvcz4qdzvwHaHa&pid=Api&P=0&h=180"
      checkoutHandler={checkoutHandler}
    ></Card>
    <Card
      productname={"Gym Bag"}
      amount={440}
      img="https://contents.mediadecathlon.com/p1284710/k$a98b70d137d3cf62aac3957bdac39529/fitness-bag-20l-black.jpg?&f=800x800"
      checkoutHandler={checkoutHandler}
    ></Card>
  </Stack>
</Box>
    );

};
export default Home;