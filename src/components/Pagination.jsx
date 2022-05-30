import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";
import styles from "./product.module.css"

const Pagination = ({pageFn,handleChange}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;



  return (
    <ButtonGroup className={styles.btngroup}>
      <Button data-cy="pagination-first-button" onClick={()=>pageFn("first")}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>pageFn(-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handleChange}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>pageFn(1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>pageFn("last")}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
