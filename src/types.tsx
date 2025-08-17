import {email, z} from "zod";
import { TypeOf } from "zod/v3";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};

export type CartItemsType = CartItemType[]

export const ShippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email().min(1, "Email is required!"),
    phone: z
        .string()
        .min(7, "Phone number must be between 7 to 11 digits!")
        .max(11, "Phone number must be between 7 to 11 digits!")
        .regex(/^\d+$/, "Phone number must contain only numbers!"),
    address: z.string().min(1, "Address is required!"),
    city: z.string().min(1, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;