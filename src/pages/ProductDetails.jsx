import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Progress, VStack } from "@chakra-ui/react";

const getColorScheme = (score) => {
  if (score >= 80) {
    return "green";
  } else if (score >= 50) {
    return "yellow";
  } else {
    return "red";
  }
};

const ProductDetails = ({ products }) => {
  const { name } = useParams();
  const productName = decodeURIComponent(name);
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return (
      <Box p={8}>
        <Text>No product found.</Text>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        {productName}
      </Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="xl" mb={2}>
            Alza Visibility Score:
          </Text>
          <Progress value={product.visibility.alza} colorScheme={getColorScheme(product.visibility.alza)} />
        </Box>
        <Box>
          <Text fontSize="xl" mb={2}>
            Mall Visibility Score:
          </Text>
          <Progress value={product.visibility.mall} colorScheme={getColorScheme(product.visibility.mall)} />
        </Box>
        <Box>
          <Text fontSize="xl" mb={2}>
            Kosik Visibility Score:
          </Text>
          <Progress value={product.visibility.kosik} colorScheme={getColorScheme(product.visibility.kosik)} />
        </Box>
      </VStack>
    </Box>
  );
};

export default ProductDetails;
