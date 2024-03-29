import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "#signin-reg", label: "Sign in / Register" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Max-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Force-1",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike React Element-55",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Zoom Pegasus-37",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Aria",
    rating: 5,
    feedback:
      "Absolutely stunning product! It's like walking on clouds. Couldn't be happier with my purchase.",
  },
  {
    imgURL: customer2,
    customerName: "Blaze Dua",
    rating: 4.8,
    feedback:
      "This product is a game-changer! It's not just a purchase; it's an experience. I'm impressed!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Nike Air Force 1", link: "/" },
      { name: "Nike Air Max 90", link: "/" },
      { name: "Nike Air Jordan 11", link: "/" },
      { name: "Nike Air Force 270", link: "/" },
      { name: "Nike Zoom Fly SP", link: "/" },
      { name: "Nike Classic Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
