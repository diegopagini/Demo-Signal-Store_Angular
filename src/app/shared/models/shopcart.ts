export interface ShoppingCart {
  id: string;
  item: Item;
  quantity: number;
}

export interface Item {
  id: string;
  name: string;
  isInStock: boolean;
  price: number;
}
