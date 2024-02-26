// // import { Box, Heading, Text, VStack } from '@chakra-ui/react';
// // import React from 'react';
// // import { useSearchParams } from 'react-router-dom';

// // const PaymentSuccess = () => {
// //   const searchQuery = useSearchParams()[0];
// //   const paymentId = searchQuery.get('paymentId');
// //   const amount=searchQuery.get('amount');
// //   return (
// //     <Box>
// //       <VStack h="100vh" justifyContent={'center'} alignContent="center">
// //         <Heading textTransform={'uppercase'}> Order Successfull</Heading>
// //         <Text>PaymentId: {paymentId}</Text>
// //       </VStack>
// //     </Box>
// //   );
// // };

// // export default PaymentSuccess;
// import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

// const PaymentSuccess = () => {
//   const searchQuery = useSearchParams()[0];
//   const paymentId = searchQuery.get('paymentId');
//   const amount = searchQuery.get('amount');

//   return (
//     <Box>
//       <VStack h="100vh" justifyContent={'center'} alignContent="center">
//         <Heading textTransform={'uppercase'}> Order Successful</Heading>
//         <Text>PaymentId: {paymentId}</Text>
//         <Link to="/display-data">
//           <Button colorScheme="blue">View Data</Button>
//         </Link>
//       </VStack>
//     </Box>
//   );
// };

// export default PaymentSuccess;
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const paymentId = searchQuery.get('paymentId');

  return (
    <Box>
      <VStack h="100vh" justifyContent={'center'} alignContent="center">
        <Heading textTransform={'uppercase'}> Order Successful</Heading>
        <Text>PaymentId: {paymentId}</Text>
        <Link to="/display-data">
          <Button colorScheme="blue">Order History</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
