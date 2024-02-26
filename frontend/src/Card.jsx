import { Button, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Card = ({ amount, img,productname,checkoutHandler }) => {
  return (
    <VStack>
      <Image src={img} boxSize={32} objectFit={'cover'}></Image>
      <Text>{productname}</Text>
      <Text>₹{amount}</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;