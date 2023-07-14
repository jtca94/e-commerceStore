import {Container, Typography, Box} from "@mui/material";
import CartCard from "../../components/Cart/CartCard";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import cartImg from "../../images/cartImg.png";
const Carro = () => {
  const {cart} = useContext(CartContext);
  return (
    <Container maxWidth="lg" sx={{}}>
      <Typography
        variant="h3"
        fontStyle="italic"
        align="center"
        fontWeight={500}
        sx={{py: 3, color: "#f50057"}}
      >
        Mi Compra
      </Typography>
      <Typography variant="h2">Productos</Typography>
      <Box
        sx={{
          borderRadius: "1rem",
          backgroundColor: "lightgray",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          pb: 4,
          mb:10,
          mt: 3, 
        }}
      >
        {cart.length > 0 ? (
          <CartCard />
        ) : (
          <>
            <Typography sx={{py: 3}} align="center" variant="h4">
              No hay productos en el carrito
            </Typography>
            <Box
              component="img"
              src={cartImg}
              alt="cartImg"
              sx={{
                display: "flex",
                mx: "auto",
                mb: 3,
                width: 300,
                objectFit: "contain",
                borderRadius: "1rem",
              }}
            />
          </>
        )}
      </Box>
    </Container>
  );
};
export default Carro;
