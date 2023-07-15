import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export default function CardHome({product}) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{maxWidth: 250, my: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", height: "411px"}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent
          sx={{ display: "block",}}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            sx={{
              display: "inline-block",
              backgroundColor: "custom.purple",
              color: "white",
              borderRadius: "1rem",
              px: 1.5,
              py: 0.5,
              mb: 1,
              mr: 1,
            }}
            variant="h6"
          >
            {product.category}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "custom.yellow",
              borderRadius: "1rem",
              display: "inline-block",
              px: 1.5,
              py: 0.5,
            }}
            variant="h6"
          >
            ${parseInt(product.price).toLocaleString("cl-CL")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(`/productos/${product.id}`)} size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}

CardHome.propTypes = {
  product: PropTypes.object.isRequired,
};
