import { Button, Input, Modal, ModalBody, ModalCloseButton, Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./product.module.css"

const AddProduct = ({saveInfo,addData}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <>
      <Button my={4} className={styles.addbtn} onClick={onOpen} data-cy="add-product-button">Add New Product</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalCloseButton />
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="title" onChange={addData} placeholder="Title" />
          <Select data-cy="add-product-category" name="category" onChange={addData}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" >
            <Radio data-cy="add-product-gender-male" type="radio" name="gender" onChange={addData}>Male</Radio>
            <Radio data-cy="add-product-gender-female" type="radio" name="gender" onChange={addData}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" type="radio" name="gender" onChange={addData}>Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Price" name="price" onChange={addData} />
          <Button data-cy="add-product-submit-button" onClick={saveInfo}>Create</Button>
        </ModalBody>
      </Modal>
      
    </>
  );
};

export default AddProduct;
