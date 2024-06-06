import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertISOToDate(isoDate: string) {
  // Create a new Date object from the ISO 8601 date string
  const date = new Date(isoDate);
  
  // Get the day, month, and year parts
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = String(date.getUTCFullYear()).slice(-2); // Get last 2 digits of year
  
  // Return the formatted date string
  return `${month}-${day}-${year}`;
}