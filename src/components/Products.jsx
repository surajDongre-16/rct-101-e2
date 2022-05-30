import React, { useEffect, useState } from "react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import AddProduct from "./AddProduct";
import Product from "./Product"
import Pagination from "./Pagination"
import styles from "./product.module.css"
import axios from "axios"


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data,setData]=useState([])
  const [page,setPage]=useState(3)
  const [limit,setLimit]=useState(1)
  const [newEntery,setNewEntery]=useState({})
  const saveInfo=(e)=>{
    e.preventDefault()

    fetch(`http://localhost:8080/products?_page=${limit}&_limit=${page}`,{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        title:newEntery.title,
        category:newEntery.category,
        gender:newEntery.gender,
        imageSrc:newEntery.url,
        price:newEntery.price
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })

  }

  const addData=(e)=>{
    let {name,checked,value,type}=e.target
    if(type=="radio"){
      setNewEntery({
        ...newEntery,
        [name]:checked
      })
    }
    else{
      setNewEntery({
        ...newEntery,
        [name]:value
      })
    }
  }



  const pageFn=(no)=>{
    if(no==="first"){
      setLimit(1)
    }
    else if(no==="last"){
      setLimit(3) 
    }
    else
    setLimit(limit+no)
  }

  const handleChange=(e)=>{
    setPage(e.target.value)
  }

  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${limit}&_limit=${page}`)
    .then((res)=>{
      setData(res.data)
    })
  },[page,limit])
  

  return (
    // // <Flex>
    //    {/* {/* AddProduct */}
    //   <AddProduct/>
    //   {/* <Grid templateColumns='repeat(3, 1fr)' gap={6}> */}
    //     <Product/>
    //   {/* </Grid> */}
    //   {/* Pagination */}
    //  {/* <Pagination/> */}
    // // </Flex>
    <div className={styles.flex}>
      <AddProduct saveInfo={saveInfo} addData={addData}/>
      <div>
        <Product data={data}/>
      </div>
      <Pagination pageFn={pageFn} handleChange={handleChange}/>
    </div>
    
  );
};

export default Products;
