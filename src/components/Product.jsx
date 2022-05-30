import { Box, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./product.module.css"

const Product = ({data}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  

  // const [data,setData]=useState([])
 
  return (
    <div className={styles.grid}>
      {data.map((el)=>(
        <Stack data-cy="product" >

          <Image data-cy="product-image" src={el.imageSrc} />
          <Text data-cy="product-category">{el.category}</Text>
          <Tag>
          <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{el.title}</Heading>
          <Box data-cy="product-price">{el.price}</Box>

        </Stack>
      ))}
      
    </div>
      
  );
};

export default Product;
