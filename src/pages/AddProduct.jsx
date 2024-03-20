import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, FormControl, FormLabel, Input, NumberInput, NumberInputField, Button } from "@chakra-ui/react";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [visibility, setVisibility] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Added:", productName, visibility);
    navigate("/");
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        Add New Product
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="productName" isRequired mb={4}>
          <FormLabel>Product Name</FormLabel>
          <Input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
        </FormControl>
        <FormControl id="visibility" isRequired mb={6}>
          <FormLabel>Visibility Score</FormLabel>
          <NumberInput max={100} min={0}>
            <NumberInputField value={visibility} onChange={(e) => setVisibility(+e.target.value)} />
          </NumberInput>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
