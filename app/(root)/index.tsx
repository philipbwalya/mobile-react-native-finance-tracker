import { styles } from "@/assets/styles/home.styles";
import { BalanceCard } from "@/components/BalanceCard";
import Loader from "@/components/Loader";
import NoTransactionsFound from "@/components/NoTransactionsFound";
import { SignOutButton } from "@/components/SignOutButton";
import { TransactionItem } from "@/components/TransactionItem";
import UserAvatar from "@/components/UserAvatar";
import { COLORS } from "@/constants/colors";
import { useTransactions } from "@/hooks/useTransactions";
import { useUser } from "@clerk/clerk-expo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Page() {
  const { user } = useUser();
  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    // useTransactions("user?.id ?? ");
    useTransactions(user?.id ?? "");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = async (id: string) => {
    Alert.alert("Delete Transaction", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteTransaction(id),
      },
    ]);
  };

  console.log("transactions", transactions[0]);
  // console.log("summary:,", summary);
  console.log("userId", user?.id);

  if (isLoading && !refreshing) return <Loader />;

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
            <View style={{ paddingLeft: 10 }}>
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
          onPress={() => router.push("/create")}
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
          <TransactionItem item={item} onDelete={() => handleDelete(item.id)} />
        )}
        ListEmptyComponent={<NoTransactionsFound />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
