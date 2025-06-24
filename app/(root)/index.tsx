import { styles } from "@/assets/styles/home.styles";
import Loader from "@/components/Loader";
import { SignOutButton } from "@/components/SignOutButton";
import UserAvatar from "@/components/UserAvatar";
import { useTransactions } from "@/hooks/useTransactions";
import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id ?? "");

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log("transactions", transactions);
  console.log("summary:,", summary);
  console.log(user?.id);

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
        <View></View>
      </View>
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
