import { CartItem } from "@/components/cart/types";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";

// International format without "+", as wa.me requires. Set in .env.local (see .env.example).
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2349167593804";

export type OrderCustomer = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  note?: string;
};

export function generateOrderNumber() {
  const year = new Date().getFullYear();
  const suffix = String(Date.now()).slice(-5);
  return `EFH-${year}-${suffix}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(orderNumber: string, customer: OrderCustomer, items: CartItem[], subtotal: number) {
  const divider = "────────────────────";
  const lines = [
    "🛍️ NEW ORDER — ELE'S HUB",
    `Order #: ${orderNumber}`,
    "",
    "Customer:",
    customer.name,
    `Phone: ${customer.phone}`,
    "",
    "Delivery:",
    `${customer.city}, ${customer.state}`,
    `Address: ${customer.address}`,
    "",
    "ITEMS",
    divider
  ];

  for (const item of items) {
    lines.push(`${item.quantity} × ${item.product.name}`);
    lines.push(`Size: ${item.size}`);
    lines.push(`Color: ${item.color}`);
    lines.push(formatPrice(item.product.price * item.quantity));
    lines.push("");
  }

  lines.push(divider);
  lines.push(`Subtotal: ${formatPrice(subtotal)}`);
  lines.push("Delivery: To be confirmed");
  lines.push(`TOTAL: ${formatPrice(subtotal)}`);

  if (customer.note?.trim()) {
    lines.push("");
    lines.push("Customer note:");
    lines.push(customer.note.trim());
  }

  lines.push("");
  lines.push("Please confirm my order.");

  return lines.join("\n");
}

export function buildProductEnquiryUrl(product: Product, size?: string, color?: string) {
  const details = [size && `Size: ${size}`, color && `Color: ${color}`].filter(Boolean).join(" · ");
  const message = [
    "Hi Ele's Hub! I'm interested in this item:",
    "",
    product.name,
    formatPrice(product.price),
    ...(details ? [details] : []),
    "",
    "Is it still available?"
  ].join("\n");
  return buildWhatsAppUrl(message);
}
