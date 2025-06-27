// types/transaction.types.ts

import { Ionicons } from "@expo/vector-icons";

// Define the available categories
export type CategoryType = 
  | "Food & Drinks"
  | "Shopping" 
  | "Transportation"
  | "Entertainment"
  | "Bills"
  | "Income"
  | "Other";

// Define the type for category with proper icon typing
export type Category = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap; // This ensures only valid Ionicons names
};

// Transaction interface
export interface Transaction {
  id: string;
  title: string;
  user_id: string;
  created_at: string;
  category: CategoryType;
  amount: number;
}

// Summary interface
export interface SummaryProps {
  balance: number;
  expense: number;
  income: number;
}

// Props interfaces
export interface TransactionItemProps {
  item: Transaction;
  onDelete: (id: string) => void;
}

export interface BalanceCardProps {
  summary: SummaryProps;
}