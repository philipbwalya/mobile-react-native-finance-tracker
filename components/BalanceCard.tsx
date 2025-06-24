import { SummaryProps } from "@/app/(root)";
import { Text, View } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";

export const BalanceCard = ({ summary }: { summary: SummaryProps }) => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>${summary.balance.toFixed(2)}</Text>
      <View style={styles.balanceStats}>
        <View style={[styles.balanceStatItem, {}]}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            +${summary.income.toFixed(1)}
          </Text>
        </View>
        <View style={[styles.statDivider, { width: 4 }]} />
        <View style={[styles.balanceStatItem, { paddingLeft: 10 }]}>
          <Text style={[styles.balanceStatLabel, { paddingLeft: 3 }]}>
            Expenses
          </Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(summary.expense).toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  );
};
