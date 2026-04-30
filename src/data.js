import tour1 from "../src/images/tour-1.jpeg";
import tour2 from "../src/images/tour-2.jpeg";
import tour3 from "../src/images/tour-3.jpeg";
import tour4 from "../src/images/tour-4.jpeg";
import tour5 from "../src/images/tour-5.jpeg";
import tour6 from "../src/images/tour-6.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Get the best value for your trips with affordable options and smart deals.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Explore scenic trails and breathtaking landscapes with unforgettable hiking adventures.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "effortless comfort",
    text: " Enjoy a smooth and stress-free travel experience with every detail thoughtfully arranged.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Trip to Tibet",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "september 26th, 2020",
    title: "Indonesian Venture",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "indonesia",
    duration: 11,
    cost: 2000,
  },
  {
    id: 3,
    image: tour3,
    date: "november 29th, 2020",
    title: "Adventure in Honkong",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "honkong",
    duration: 8,
    cost: 3100,
  },
  {
    id: 4,
    image: tour4,
    date: "december 16th, 2020",
    title: "Explore Kenya",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "kenya",
    duration: 20,
    cost: 5100,
  },
  {
    id: 5,
    image: tour5,
    date: "january 16th, 2020",
    title: "African Wild",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "Africa",
    duration: 20,
    cost: 3100,
  },
  {
    id: 6,
    image: tour6,
    date: "april 1st, 2020",
    title: "Visit India",
    info: `Experience the rich culture, natural beauty, and unique traditions that make every country a destination worth exploring.`,
    location: "India",
    duration: 18,
    cost: 8100,
  },
];
