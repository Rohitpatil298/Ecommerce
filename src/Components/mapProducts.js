import lamp from "../Assets/lamp.png";
import chair from "../Assets/chair.jpg";
import vase from "../Assets/vase.png";
import pot from "../Assets/pot.png";

const mapProducts = [
  {
    id: "chair1",
    image: <img src={chair} alt="" />,
    name: "The Dandy chair",
    price: "£250",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "vase1",
    image: <img src={pot} alt="" />,
    name: "Rustic Vase Set",
    price: "£155",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "vase2",
    image: <img src={vase} alt="" />,
    name: "The Silky Vase",
    price: "£125",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "lamp1",
    image: <img src={lamp} alt="" />,
    name: "The Lucy Lamp",
    price: "£399",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
];
export default mapProducts;
