import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, FormControl, FormLabel, Input, NumberInput, NumberInputField, Button } from "@chakra-ui/react";

const AddProduct = (props) => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [alzaVisibility, setAlzaVisibility] = useState(0);
  const [mallVisibility, setMallVisibility] = useState(0);
  const [kosikVisibility, setKosikVisibility] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      visibility: {
        alza: alzaVisibility,
        mall: mallVisibility,
        kosik: kosikVisibility,
      },
    };

    props.onAddProduct(newProduct);
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
        <FormControl id="alzaVisibility" isRequired mb={4}>
          <FormLabel>Alza Visibility Score</FormLabel>
          <NumberInput max={100} min={0}>
            <NumberInputField value={alzaVisibility} onChange={(e) => setAlzaVisibility(+e.target.value)} />
          </NumberInput>
        </FormControl>
        <FormControl id="mallVisibility" isRequired mb={4}>
          <FormLabel>Mall Visibility Score</FormLabel>
          <NumberInput max={100} min={0}>
            <NumberInputField value={mallVisibility} onChange={(e) => setMallVisibility(+e.target.value)} />
          </NumberInput>
        </FormControl>
        <FormControl id="kosikVisibility" isRequired mb={6}>
          <FormLabel>Kosik Visibility Score</FormLabel>
          <NumberInput max={100} min={0}>
            <NumberInputField value={kosikVisibility} onChange={(e) => setKosikVisibility(+e.target.value)} />
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
