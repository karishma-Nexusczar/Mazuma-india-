export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Piyush Kumar",
    designation: "Medical Professional, United Kingdom",
    quote: "I had a very positive experience with Mazuma India while filing my income tax returns. Their team was extremely helpful, professional, and responsive throughout the entire process. They explained everything clearly, guided me through the requirements, and made the whole tax filing process simple and hassle-free.\n\nI really appreciate their prompt support and attention to detail. I would highly recommend Mazuma India to anyone looking for reliable and professional assistance with their tax returns.\n\nI recently had a great experience with Mazuma India while looking for real estate opportunities across the Delhi NCR region. Their team was extremely professional, knowledgeable, and helpful throughout the entire process.\n\nThey understood my requirements, provided valuable guidance, and helped make the property search and decision-making process smooth and stress-free. I particularly appreciated their transparency, responsiveness, and genuine approach in helping me find the right option.\n\nI would definitely recommend Mazuma India to anyone looking to buy or invest in property across Delhi NCR. Their expertise and personalised service make the entire experience much easier and more reassuring.",
    rating: 5,
    image: "/dr-piyush-kumar.png"
  },
  {
    id: "2",
    name: "Priya Nair",
    designation: "Director, Apex FinServ",
    quote: "Exceptional service for accounting and annual ROC filings. They take away all the compliance stress so we can focus 100% on business growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    name: "Amit Patel",
    designation: "Co-Founder, GreenLife MSME",
    quote: "Highly recommended for tax filing and advisory! Transparent pricing, dedicated support, and zero hidden surprises throughout the entire process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];
