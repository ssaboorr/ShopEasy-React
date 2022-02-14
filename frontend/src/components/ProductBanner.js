import { Box, Divider, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {ProductCard,Products} from "./Products";
import axios from "axios";

export const Banner1 = ({ type }) => {
  const [products, setProduct] = useState([""]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/`);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  let product = products.filter(
    (prod) => (prod.type === "sports") & (prod.price <= 6000)
  );


  return (
    <>
      <Box  display="flex" flexDirection="row" gap="5" justify="flex-start" wrap="wrap">
        <Heading as="h2" color="gray.800" fontSize="3xl">
          Trending In Football
        </Heading>
      </Box>

      <Grid
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          base: "2fr",
        }}
      >
        {product.map((prod) => (
          <Products type="fashion" key={prod._id} product={prod} />
          // <ProductCard key={prod._id} product={prod} />
        ))}
      </Grid>
    </>
  );
};

export const Banner2 = ({ type }) => {
  const [products, setProduct] = useState([""]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/`);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  let product = products.filter(
    (prod) => (prod.type === "casuals") & (prod.category === "Mens Originals")
  );

  return (
    <>
   
      <Grid
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          base: "1fr",
        }}
        justifyContent="space-evenly"
        gap="5"
      >
        {/* {product.map((prod) => (
          <Product type="fashion" key={prod._id} product={prod} />
        ))} */}
      </Grid>
    </>
  );
};

export const Banner3 = ({ type }) => {
  const [products, setProduct] = useState([""]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  let product = products.filter(
    (prod) => (prod.type === "casuals") & (prod.category === "Women Originals")
  );
  return (
    <>
      <Box display="flex" flexDirection="row" gap="5" justify="flex-start">
        <Heading as="h2" color="gray.800" fontSize="3xl">
          Trending Deals
        </Heading>
      </Box>
      <Grid
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          base: "1fr",
        }}
      >
        {/* {product.map((prod) => (
          <Product type="fashion" key={prod._id} product={prod} />
        ))} */}
      </Grid>
    </>
  );
};

export const ImageBanner1 = () => {
  return (
    <>
      <Image src="/images/banner1.jpg" />
    </>
  );
};
