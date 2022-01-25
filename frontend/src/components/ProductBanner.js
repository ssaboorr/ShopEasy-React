import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Product from "./Products";
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

  let product = products.filter((prod) => prod.type === 'sports' & prod.rating >= 4.5);

  return (
    <>
      <Box display="flex" flexDirection="row" gap="5" justify="flex-start">
        <Heading as="h2" fontSize="3xl">
          Trending In Football
        </Heading>
      </Box>
      <Flex
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="5"
        m="4"
        p="4"
        alignItems="center"
        justify="center"
      >
        {product.map((prod) => (
          <Product type="fashion" key={prod._id} product={prod} />
        ))}
      </Flex>
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

  let product = products.filter((prod) => prod.type === "casuals" & prod.category === "Mens Originals");

  return (
    <>
      <Box display="flex" flexDirection="row" gap="5" justify="flex-start">
        <Heading as="h2" fontSize="3xl">
          New Arrivals in Originals
        </Heading>
      </Box>
      <Flex
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="5"
        m="4"
        p="4"
        alignItems="center"
        justify="center"
      >
        {product.map((prod) => (
          <Product type="footwear" key={prod._id} product={prod} />
        ))}
      </Flex>
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

  let product = products.filter((prod) => prod.type === 'casuals' & prod.category === "Women Originals");
  return (
    <>
      <Box display="flex" flexDirection="row" gap="5" justify="flex-start">
        <Heading as="h2" fontSize="3xl">
          Trending Deals
        </Heading>
      </Box>
      <Flex
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="5"
        m="4"
        p="4"
        alignItems="center"
        justify="center"
      >
        {product.map((prod) => (
          <Product type="phone" key={prod._id} product={prod} />
        ))}
      </Flex>
    </>
  );
};


export const ImageBanner1 = () => {
  return (
    <>
    <Image src="/images/banner1.jpg"/>
    </>
  )
}