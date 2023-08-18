import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigproduct1, bigproduct2, bigproduct3, customer1, customer2, product4, product5, product6, product7} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bigProducts = [
    {
        thumbnail: bigproduct1,
        bigProduct: bigproduct1,
    },
    {
        thumbnail: bigproduct2,
        bigProduct: bigproduct2,
    },
    {
        thumbnail: bigproduct3,
        bigProduct: bigproduct3,
    },
];

export const statistics = [
    { value: '500+', label: 'Brands' },
    { value: '100+', label: 'Categories' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: product4,
        name: "Charcoal FaceWash",
        price: "Rs.499.00",
    },
    {
        imgURL: product5,
        name: "Charcoal Face Scrub",
        price: "Rs.699.00",
    },
    {
        imgURL: product6,
        name: "Beard Conditioner",
        price: "Rs.799.00",
    },
    {
        imgURL: product7,
        name: "2-in-1 Shampoo + Conditioner",
        price: "Rs.500.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'John Doe',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Cristina',
        rating: 4.5,
        feedback: "The gift product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "De-Tan", link: "/" },
            { name: "Body Sprays", link: "/" },
            { name: "Hair Styling", link: "/" },
            { name: "Beard Growth", link: "/" },
            { name: "Hair Care", link: "/" },
            { name: "Gifts", link: "/" },
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
            { name: "customer@daarimooch.com", link: "mailto:customer@daarimooch.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];