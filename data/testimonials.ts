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
    name: "Rajesh Sharma",
    designation: "Founder, TechPulse India",
    quote: "Mazuma India handled our Private Limited registration and GST compliance seamlessly. Their team is extremely professional and prompt in execution.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
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
