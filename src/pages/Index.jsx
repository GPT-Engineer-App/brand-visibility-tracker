import React, { useState } from "react";
import { Box, Heading, Text, Image, Stack, Button, Grid, Progress, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const products = [
  {
    name: "Lindt Excellence Dark Chocolate 70%",
    image: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kdCUyMEV4Y2VsbGVuY2UlMjBEYXJrJTIwQ2hvY29sYXRlJTIwNzAlMjV8ZW58MHx8fHwxNzEwOTI1Njk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    visibility: 85,
  },
  {
    name: "Lindt Lindor Milk Chocolate Truffles",
    image: "https://images.unsplash.com/photo-1603751915495-a5a3ec39c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kdCUyMExpbmRvciUyME1pbGslMjBDaG9jb2xhdGUlMjBUcnVmZmxlc3xlbnwwfHx8fDE3MTA5MjU2OTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    visibility: 92,
  },
  {
    name: "Lindt Excellence Milk Chocolate",
    image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kdCUyMEV4Y2VsbGVuY2UlMjBNaWxrJTIwQ2hvY29sYXRlfGVufDB8fHx8MTcxMDkyNTY5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    visibility: 78,
  },
];

const Index = () => {
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
        <Button colorScheme="blue" size="lg">
          Add Product
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredProducts.map((product, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={4}>Visibility Score:</Text>
            <Progress value={product.visibility} mb={4} />
            <Text fontWeight="bold">{product.visibility}%</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
