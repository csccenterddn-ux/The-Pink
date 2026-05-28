export interface Service {
  id: string;
  name: string;
  description: string;
  priceDetail: string;
  features: string[];
  iconName: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface PickupFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  pickupDate: string;
  pickupTime: string;
  address: string;
  notes?: string;
}
