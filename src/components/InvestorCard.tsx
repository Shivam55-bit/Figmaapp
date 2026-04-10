import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize, Spacing, BorderRadius, moderateScale } from '../theme';

interface InvestorCardProps {
  name: string;
  joinedDate: string;
  status: 'Active' | 'Dormant' | 'KYC Pending';
  invested: string;
  current: string;
  returnPercent: string;
  onPress?: () => void;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  return parts.length >= 2
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : parts[0].substring(0, 2).toUpperCase();
};

const InvestorCard: React.FC<InvestorCardProps> = ({
  name,
  joinedDate,
  status,
  invested,
  current,
  returnPercent,
  onPress,
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'Active':
        return { bg: Colors.activeBadgeBg, text: Colors.activeBadgeText, icon: 'check-circle' };
      case 'Dormant':
        return { bg: Colors.dormantBadgeBg, text: Colors.dormantBadgeText, icon: 'clock-outline' };
      case 'KYC Pending':
        return { bg: Colors.kycPendingBg, text: Colors.kycPendingText, icon: 'alert-circle-outline' };
      default:
        return { bg: Colors.cardBorder, text: Colors.textMuted, icon: 'help-circle-outline' };
    }
  };

  const statusStyle = getStatusStyle();
  const isPositive = returnPercent.startsWith('+');
  const isZero = returnPercent === '0%';

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.topLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{getInitials(name)}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.joinedDate}>Joined {joinedDate}</Text>
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: statusStyle.bg }]}>
          <Icon name={statusStyle.icon} size={moderateScale(10)} color={statusStyle.text} />
          <Text style={[styles.badgeText, { color: statusStyle.text }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Invested</Text>
          <Text style={styles.statValue}>${invested}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Current</Text>
          <Text style={[styles.statValue, { color: Colors.green }]}>{current}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>Return</Text>
          <Text
            style={[
              styles.statValue,
              {
                color: isZero
                  ? Colors.textMuted
                  : isPositive
                  ? Colors.green
                  : Colors.red,
              },
            ]}>
            {returnPercent}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#2A2000',
    borderWidth: 1,
    borderColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    color: Colors.accent,
    fontSize: FontSize.sm,
    fontWeight: '800',
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  joinedDate: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.round,
    gap: 4,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: moderateScale(30),
    backgroundColor: Colors.divider,
  },
  statLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginBottom: 4,
  },
  statValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
});

export default InvestorCard;
