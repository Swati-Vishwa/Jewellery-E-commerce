// core/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  altText: string;
  category: 'stud' | 'hoops' | 'hooks' | 'bracelet' | 'necklace';
  isNew: boolean;
  isWishlisted?: boolean;
}