import React, { useState } from "react";
import { Box, Heading, Text, Stack, Button, Grid, Progress, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Index = ({ products, onAddProduct }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Forloop Product Visibility Tracker
      </Heading>
      <Text fontSize="xl" mb={8}>
        Track the visibility of your Lindt products across e-commerce stores.
      </Text>

      <Flex mb={8}>
        <Box flex={1} mr={4}>
          <Text mb={2}>Search Products:</Text>
          <Flex>
            <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flex: 1, padding: "8px", fontSize: "16px" }} />
            <Button leftIcon={<FaSearch />} ml={2}>
              Search
            </Button>
          </Flex>
        </Box>
        <Spacer />
        <Button colorScheme="blue" size="lg" onClick={() => navigate("/add-product")}>
          Add Product
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredProducts.map((product, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={4}>Visibility Scores:</Text>
            <Text>Alza: {product.visibility.alza}%</Text>
            <Progress value={product.visibility.alza} mb={2} />
            <Text>Mall: {product.visibility.mall}%</Text>
            <Progress value={product.visibility.mall} mb={2} />
            <Text>Kosik: {product.visibility.kosik}%</Text>
            <Progress value={product.visibility.kosik} mb={4} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
