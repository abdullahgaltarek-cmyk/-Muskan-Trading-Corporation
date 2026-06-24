export type CategoryType = 'water-pump' | 'pipe-fittings' | 'sanitary' | 'bathroom-accessories' | 'motor';

export interface Category {
  id: CategoryType;
  name: string;
  image: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  banglaName?: string;
  logo: string; // Initials or small vector representation
  image: string; // Premium brand banner / product setting image
  type: 'pump' | 'pipe' | 'sanitary';
  country: string;
  description: string;
  banglaDescription?: string;
  // Specific properties based on brand type
  materialType?: string; // For pipes
  popularCategories?: string[]; // For pipes
  collection?: string; // For sanitary
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  title: string;
  banglaTitle?: string;
  category: CategoryType;
  brandId: string;
  brandName: string;
  price: number; // In BDT
  wholesalePrice?: number; // For wholesale buyers
  minWholesaleQty?: number;
  images: string[]; // Product image gallery
  shortDescription: string;
  banglaDescription?: string;
  specification: Record<string, string>;
  warranty: string;
  availability: 'In Stock' | 'Out of Stock' | 'Contact for Availability';
  stock: number;
  deliveryInfo: string;
  rating: number;
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  isWholesale: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'staff' | 'owner';
  phone?: string;
  companyName?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  address: string;
  items: {
    productId: string;
    productTitle: string;
    brandName: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  totalAmount: number;
  status: 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  trackingNumber: string;
  paymentMethod: 'Cash on Delivery' | 'Bank Transfer' | 'bKash/Nagad' | 'Wholesale Credit';
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  companyName?: string;
  email: string;
  phone: string;
  products: {
    productId: string;
    productTitle: string;
    quantity: number;
    notes?: string;
  }[];
  message: string;
  status: 'Pending' | 'Reviewed' | 'Replied';
  date: string;
}
