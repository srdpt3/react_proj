import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  console.log(items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "https://weddingband.herokuapp.com/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const CartierItems = items.filter(
    (item) => item.attributes.category === "Cartier"
  );
  const BoucheronItems = items.filter(
    (item) => item.attributes.category === "Boucheron"
  );
  const vanItems = items.filter(
    (item) => item.attributes.category === "Van C&A"
  );

  const GraffItems = items.filter(
    (item) => item.attributes.category === "Graff"
  );

  const TiffanyItems = items.filter(
    (item) => item.attributes.category === "Tiffany & Co"
  );

  const PiagetItems = items.filter(
    (item) => item.attributes.category === "Piaget"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "10px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="Cartier" value="Cartier" />
        <Tab label="Van C&A" value="Van C&A" />
        <Tab label="Boucheron" value="Boucheron" />
        <Tab label="Graff" value="Graff" />
        <Tab label="Piaget" value="Piaget" />
        <Tab label="Tiffany & Co" value="Tiffany & Co" />
        <Tab label="Chaumet" value="Chaumet" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Cartier" &&
          CartierItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Van C&A" &&
          vanItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Boucheron" &&
          BoucheronItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "Graff" &&
          GraffItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "Piaget" &&
          PiagetItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "Tiffany & Co" &&
          TiffanyItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
