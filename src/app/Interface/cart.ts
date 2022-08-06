import { CartEntries } from "./cartEntries";

export interface Cart {
    userId: number,
    entries: CartEntries[];
  }
  