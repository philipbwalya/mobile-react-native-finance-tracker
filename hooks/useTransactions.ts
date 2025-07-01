// fetch hook
import { API_URL } from "@/constants/api";
import { SummaryProps, Transaction } from "@/types";
import { useCallback, useState } from "react";
import { Alert } from "react-native";


export const useTransactions = (user_id: string) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const[summary, setSummary] = useState<SummaryProps>({
    balance: 0,
    income: 0,
    expense: 0,
  });
  const [isLoading,setIsLoading] = useState(false);
  // fetch transactions
  const fetchTransactions = useCallback(async () => {
    try {
    const response = await fetch(`${API_URL}/transactions/${user_id}`);
    const data = await response.json();
    setTransactions(data);
    } catch (error) {
      console.log("Error fetching transactions",error);
    }
  },[user_id]);

  // fetch summary
    const fetchSummary = useCallback(async () => {
    try {
    const response = await fetch(`${API_URL}/transactions/summary/${user_id}`);
    const data = await response.json();
    
    const convertedSummary = {
      balance: parseFloat(data.balance || 0),
      income: parseFloat(data.income || 0),
      expense: parseFloat(data.expense || 0)
    };
    
    setSummary(convertedSummary);
    } catch (error) {
      console.log("Error fetching summary",error);
    }  
  },[user_id]);
  
  // load data
  const loadData = useCallback(async () => {
    if(!user_id) return;
    try {
      setIsLoading(true);
      await Promise.all([fetchTransactions(),fetchSummary()]);
    } catch (error) {
      console.log("Error loading data",error);
    }finally{
      setIsLoading(false);
    }
  },[user_id,fetchTransactions,fetchSummary]);

// delete transaction
  const deleteTransaction = async (id: string) => {
    try {
    const response = await fetch(`${API_URL}/transactions/${id}`,{method: "DELETE"});
    console.log("response",response);
    if(!response.ok){
      await loadData();
      throw new Error("Failed to delete transaction");
    }
    // refresh data after deleting
    setTransactions(prev => prev.filter(t => t.id !== id));
    Alert.alert("Success","Transaction deleted successfully");
    } catch (error) {
      console.log("Error fetching summary",error);
      const errorMessage = (error as any)?.message
      Alert.alert("Error",errorMessage || "Something went wrong");
    }  
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };  
};