import {Box, Grid, Typography, Button} from "@mui/material";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartCard = () => {
  const {cart, handleRemoveFromCart, handleAddToCart} = useContext(CartContext);
  return (
    <>
      {cart.map((item) => (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            m: 3,
            pt: 3,
          }}
          key={item.id}
        >
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "250px",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" fontWeight="bold" >
              {item.name}
            </Typography>
            <Typography variant="h5" fontWeight="bold" >
              {item.category}
            </Typography>
          </Grid>
          <Grid
            sx={{display: "flex", flexDirection: "column"}}
            item
            xs={12}
            sm={4}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 3,
              }}
            >
              <Button
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
                variant="contained"
                size="small"
                sx={{borderRadius: "50%", backgroundColor: "custom.yellow"}}
              >
                <RemoveIcon />
              </Button>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mx: 3}}
              >
                {item.quantity}
              </Typography>
              <Button
                onClick={() => {
                  handleAddToCart(item);
                }}
                variant="contained"
                color="primary"
                size="small"
                sx={{borderRadius: "50%"}}
              >
                <AddIcon />
              </Button>
            </Box>
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight="bold"
            >
              $
              {item.price.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              }) * item.quantity}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default CartCard;
