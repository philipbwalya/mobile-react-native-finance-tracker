import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { useClerk } from "@clerk/clerk-expo";
import { Entypo } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Alert, TouchableOpacity } from "react-native";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await signOut();
          Linking.openURL(Linking.createURL("/"));
        },
      },
    ]);
  };
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Entypo name="log-out" size={24} color={COLORS.text} />
    </TouchableOpacity>
  );
};
