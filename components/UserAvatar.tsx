import { Image, StyleSheet, View } from "react-native";

const UserAvatar = ({ source, size = 50 }: { source: any; size?: number }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={source}
        style={[styles.avatar, { width: size, height: size }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
  },
  avatar: {
    borderRadius: 50,
  },
});

export default UserAvatar;
