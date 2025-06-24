import { styles } from "@/assets/styles/home.styles";
import { BalanceCard } from "@/components/BalanceCard";
import Loader from "@/components/Loader";
import { SignOutButton } from "@/components/SignOutButton";
import { TransactionItem } from "@/components/TransactionItem";
import UserAvatar from "@/components/UserAvatar";
import { COLORS } from "@/constants/colors";
import { useTransactions } from "@/hooks/useTransactions";
import { useUser } from "@clerk/clerk-expo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

export interface TransactionProps {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  type: string;
}

export interface SummaryProps {
  balance: number;
  expense: number;
  income: number;
}

export default function Page() {
  const { user } = useUser();
  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id ?? "");

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = async (id: string) => {
    Alert.alert("Delete Transaction", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteTransaction(id);
        },
      },
    ]);
  };

  console.log("transactions", transactions[0]);
  // console.log("summary:,", summary);

  if (isLoading) return <Loader />;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* header */}
        <View style={styles.header}>
          {/* avatar */}
          <View style={styles.headerLeft}>
            <UserAvatar
              source={{ uri: "https://dummyimage.com/100x100/000/fff" }}
              size={48}
            />
            <View>
              <Text style={styles.welcomeText}>Hello,👋</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0].emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* signout Icon */}
          <SignOutButton />
        </View>
        {/* balance section. */}
        <BalanceCard summary={summary} />
        {/* Add Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log("hello")}
        >
          <AntDesign name="plus" size={24} color={COLORS.white} />
          <Text style={styles.addButtonText}>Add Transaction</Text>
        </TouchableOpacity>
        {/* transactions */}
        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Past Transactions</Text>
        </View>
      </View>
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete(item.id)} />
        )}
      />
    </View>
  );
}

{
  /* <SignedIn>
  <Text style={{ marginBottom: 20 }}>
    Hello, {user?.emailAddresses[0].emailAddress}
  </Text>
  <Text>Balance: {summary.balance}</Text>
  <Text>Balance: {summary.income}</Text>
  <Text>Balance: {summary.expenses}</Text>
  <Text>user: {user?.id}</Text>
  <SignOutButton />
  </SignedIn>
  <SignedOut>
  <Link href="/(auth)/sign-in">
  <Text>Sign in</Text>
  </Link>
  <Link href="/(auth)/sign-up">
    <Text>Sign up</Text>
    </Link>
</SignedOut> */
}
