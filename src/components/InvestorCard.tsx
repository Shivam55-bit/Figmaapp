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
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'Active':
        return { bg: Colors.activeBadgeBg, text: Colors.activeBadgeText, icon: 'check-circle', glow: Colors.glowGreen };
      case 'Dormant':
        return { bg: Colors.dormantBadgeBg, text: Colors.dormantBadgeText, icon: 'clock-outline', glow: Colors.glowGold };
      case 'KYC Pending':
        return { bg: Colors.kycPendingBg, text: Colors.kycPendingText, icon: 'alert-circle-outline', glow: Colors.glowGold };
      default:
        return { bg: Colors.cardBorder, text: Colors.textMuted, icon: 'help-circle-outline', glow: '#00000000' };
    }
  };

  const statusStyle = getStatusStyle();
  const isPositive = returnPercent.startsWith('+');
  const isZero = returnPercent === '0%';

  return (
    <View style={styles.card}>
      {/* Subtle top glow line */}
      <LinearGradient
        colors={['#F5B70040', '#F5B70000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.topGlow}
      />
      <View style={styles.topRow}>
        <View style={styles.topLeft}>
          <LinearGradient
            colors={['#F5B700', '#FFD54F', '#F5B700']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.avatarRing}>
            <View style={styles.avatarInner}>
              <Text style={styles.avatarText}>{getInitials(name)}</Text>
            </View>
          </LinearGradient>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.joinedRow}>
              <Icon name="calendar-clock" size={moderateScale(11)} color={Colors.textMuted} />
              <Text style={styles.joinedDate}>{joinedDate}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: statusStyle.bg }]}>
          <Icon name={statusStyle.icon} size={moderateScale(11)} color={statusStyle.text} />
          <Text style={[styles.badgeText, { color: statusStyle.text }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>INVESTED</Text>
          <Text style={styles.statValue}>${invested}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>CURRENT</Text>
          <Text style={[styles.statValue, { color: Colors.green }]}>{current}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCol}>
          <Text style={styles.statLabel}>RETURN</Text>
          <View style={styles.returnRow}>
            {!isZero && (
              <Icon
                name={isPositive ? 'trending-up' : 'trending-down'}
                size={moderateScale(13)}
                color={isPositive ? Colors.green : Colors.red}
              />
            )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    borderWidth: 1.5,
    borderColor: Colors.cardBorder,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.42,
    shadowRadius: 14,
    overflow: 'hidden',
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
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
  avatarRing: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarInner: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(19),
    backgroundColor: '#0E0E18',
    justifyContent: 'center',
    alignItems: 'center',
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
  joinedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 3,
  },
  joinedDate: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs + 2,
    borderRadius: BorderRadius.round,
    gap: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A0A14',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: '#1A1A28',
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
    fontSize: FontSize.xs - 1,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  statValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  returnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});

export default InvestorCard;
