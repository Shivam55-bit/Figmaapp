import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Spacing, BorderRadius, FontSize, moderateScale } from '../theme';
import { Card, SectionHeader, ProgressBar, QuickActionButton } from '../components';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarRing}>
              <LinearGradient
                colors={['#F5B700', '#FFD54F', '#F5B700']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.avatarGradient}>
                <View style={styles.avatarInner}>
                  <Text style={styles.avatarInitials}>RK</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.greetingTime}>{getGreeting()}</Text>
              <Text style={styles.greeting}>Rahul Kapoor</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <View style={styles.notifDot} />
            <Icon name="bell-outline" size={moderateScale(22)} color={Colors.accent} />
          </TouchableOpacity>
        </View>

        {/* Commission Balance Card */}
        <Card gradient style={styles.balanceCard}>
          <View style={styles.balanceLabelRow}>
            <Icon name="wallet-outline" size={moderateScale(14)} color={Colors.accent} />
            <Text style={styles.balanceLabel}>COMMISSION BALANCE</Text>
          </View>
          <Text style={styles.balanceAmount} adjustsFontSizeToFit numberOfLines={1}>₹2,450.00</Text>
          <Text style={styles.balanceSub}>5,450 USDT</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.withdrawCTA}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.withdrawGradient}>
              <Icon name="bank-transfer-out" size={moderateScale(16)} color={Colors.black} />
              <Text style={styles.withdrawText}>Withdraw</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.balanceDivider} />
          <View style={styles.balanceRow}>
            <View style={styles.balanceCol}>
              <View style={styles.balanceDotRow}>
                <View style={[styles.balanceDot, { backgroundColor: Colors.accent }]} />
                <Text style={styles.balanceColLabel}>ONE TIME</Text>
              </View>
              <Text style={[styles.balanceColValue, { color: Colors.accent }]}>₹1,29,504</Text>
              <Text style={styles.balanceColSub}>$1500.00</Text>
            </View>
            <View style={styles.balanceColDivider} />
            <View style={styles.balanceCol}>
              <View style={styles.balanceDotRow}>
                <View style={[styles.balanceDot, { backgroundColor: Colors.green }]} />
                <Text style={styles.balanceColLabel}>RECURRING</Text>
              </View>
              <Text style={[styles.balanceColValue, { color: Colors.green }]}>₹50,616</Text>
              <Text style={styles.balanceColSub}>$650.80</Text>
            </View>
          </View>
        </Card>

        {/* Lifetime Earnings Card */}
        <Card>
          <View style={styles.balanceLabelRow}>
            <Icon name="chart-line" size={moderateScale(14)} color={Colors.textMuted} />
            <Text style={styles.balanceLabel}>LIFETIME EARNINGS</Text>
          </View>
          <Text style={styles.lifetimeAmount} adjustsFontSizeToFit numberOfLines={1}>₹4,820.60</Text>
          <Text style={styles.balanceSub}>5,450 USDT</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>YESTERDAY</Text>
                <Text style={styles.statValue}>₹3,17,010</Text>
                <Text style={styles.statSub}>$8.42</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>THIS MONTH</Text>
                <Text style={styles.statValue}>₹3,17,010</Text>
                <Text style={styles.statSub}>$380.40</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>LAST MONTH</Text>
                <Text style={styles.statValue}>₹3,17,010</Text>
                <Text style={styles.statSub}>$310.20</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Mini Stats Row */}
        <Card>
          <View style={styles.miniStatsRow}>
            <View style={styles.miniStatItem}>
              <Icon name="account-group-outline" size={moderateScale(18)} color={Colors.accent} style={styles.miniStatIcon} />
              <Text style={styles.miniStatValue}>12</Text>
              <Text style={styles.miniStatLabel}>INVESTORS</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.miniStatItem}>
              <Icon name="chart-box-outline" size={moderateScale(18)} color={Colors.green} style={styles.miniStatIcon} />
              <Text style={styles.miniStatValue}>$48.2K</Text>
              <Text style={styles.miniStatLabel}>TOTAL AUM</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.miniStatItem}>
              <Icon name="trending-up" size={moderateScale(18)} color={Colors.green} style={styles.miniStatIcon} />
              <Text style={[styles.miniStatValue, { color: Colors.green }]}>+18%</Text>
              <Text style={styles.miniStatLabel}>CUM. RETURN</Text>
            </View>
          </View>
        </Card>

        {/* Target Milestones */}
        <SectionHeader title="TARGET MILESTONES" />
        <Card>
          <View style={styles.milestoneHeader}>
            <View>
              <Text style={styles.milestoneTitle}>This Month's Commission</Text>
              <Text style={styles.milestoneSub}>14% of ₹2L target</Text>
            </View>
            <Text style={styles.milestoneValue}>₹27,720</Text>
          </View>
          <ProgressBar
            progress={0.14}
            label="₹0"
            subLabel="₹1,72,280 remaining to reach ₹2L"
          />
          <ProgressBar
            progress={0.14}
            showChips
            chips={[
              { label: '₹2L', active: false },
              { label: '₹5L', active: false },
              { label: '₹20L', active: true },
              { label: '₹50L', active: false },
              { label: '₹1cr', active: false },
            ]}
          />
        </Card>

        {/* Quick Actions */}
        <SectionHeader title="QUICK ACTIONS" />
        <View style={styles.quickActionsGrid}>
          <QuickActionButton icon="bank-transfer-out" label="Withdraw" subtitle="Send to Bank" />
          <QuickActionButton icon="share-variant-outline" label="Share" subtitle="Invite Friends" />
          <QuickActionButton icon="swap-horizontal" label="Transactions" subtitle="View History" />
          <QuickActionButton icon="cash-multiple" label="Commissions" subtitle="View Breakdown" onPress={() => navigation.navigate('Commissions')} />
          <QuickActionButton icon="basket-outline" label="Baskets" subtitle="Browse All" onPress={() => navigation.navigate('MyInvestors')} />
          <QuickActionButton icon="calculator-variant-outline" label="Calculator" subtitle="SIP & Returns" />
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.lg,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarRing: {
    marginRight: Spacing.md,
  },
  avatarGradient: {
    width: moderateScale(46),
    height: moderateScale(46),
    borderRadius: moderateScale(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitials: {
    color: Colors.accent,
    fontSize: FontSize.md,
    fontWeight: '800',
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  greetingTime: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    fontWeight: '500',
  },
  greeting: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
  },
  notificationBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.cardBg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: moderateScale(8),
    right: moderateScale(10),
    width: moderateScale(7),
    height: moderateScale(7),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.red,
    zIndex: 1,
  },
  // Balance Card
  balanceCard: {
    alignItems: 'center',
  },
  balanceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.sm,
  },
  balanceLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  balanceAmount: {
    color: Colors.textPrimary,
    fontSize: FontSize.hero,
    fontWeight: '800',
    textAlign: 'center',
  },
  balanceSub: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: Spacing.md,
  },
  withdrawCTA: {
    marginBottom: Spacing.lg,
  },
  withdrawGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
  },
  withdrawText: {
    color: Colors.black,
    fontSize: FontSize.sm,
    fontWeight: '800',
  },
  balanceDivider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    width: '100%',
    marginBottom: Spacing.lg,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  balanceCol: {
    alignItems: 'center',
    flex: 1,
  },
  balanceColDivider: {
    width: 1,
    height: moderateScale(50),
    backgroundColor: Colors.divider,
  },
  balanceDotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 4,
  },
  balanceDot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: moderateScale(3),
  },
  balanceColLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs - 1,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  balanceColValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '800',
  },
  balanceColSub: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 1,
  },
  // Lifetime
  lifetimeAmount: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxxl,
    fontWeight: '800',
    textAlign: 'center',
  },
  // Stats
  statsContainer: {
    backgroundColor: '#111111',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  statValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  statSub: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: moderateScale(40),
    backgroundColor: Colors.divider,
  },
  // Mini Stats
  miniStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  miniStatIcon: {
    marginBottom: 4,
  },
  miniStatValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  miniStatLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  // Milestones
  milestoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  milestoneTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  milestoneSub: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 2,
  },
  milestoneValue: {
    color: Colors.accent,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  // Quick Actions
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomSpacer: {
    height: Spacing.lg,
  },
});

export default HomeScreen;
