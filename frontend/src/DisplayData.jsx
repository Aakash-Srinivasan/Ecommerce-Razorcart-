import React, { useState, useEffect } from 'react';
import env from './env';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, TableCaption, Badge } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function DisplayData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const PAYMENT_HOST = env.REACT_APP_PAYMENT_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${PAYMENT_HOST}/payments`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box mt={4} ml={4} mr={4}>
      <Table variant="striped" colorScheme="">
        <TableCaption placement="top" fontWeight="bold">Order History</TableCaption>
        <Thead>
          <Tr>
            <Th>Amount</Th>
            <Th>Order ID</Th>
            <Th>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>₹{item.amount / 100}</Td>
              <Td>{item.razorpay_order_id}</Td>
              <Td>
                {item.status === "created" ? (
                  <Badge colorScheme="green" borderRadius="full">
                    <CheckCircleIcon mr="2" />
                    Received
                  </Badge>
                ) : (
                  <Text>{item.status}</Text>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default DisplayData;
