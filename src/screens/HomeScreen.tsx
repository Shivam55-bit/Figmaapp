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
import MaskedView from '@react-native-masked-view/masked-view';
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

const getGreetingIcon = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'weather-sunset-up';
  if (hour < 17) return 'white-balance-sunny';
  return 'weather-night';
};

type GradientTextProps = {
  children: React.ReactNode;
  style?: any;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  numberOfLines?: number;
  adjustsFontSizeToFit?: boolean;
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  style,
  colors = ['#F5B700', '#FFD54F'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  numberOfLines,
  adjustsFontSizeToFit,
}) => (
  <MaskedView
    maskElement={
      <Text
        style={[style, styles.gradientMaskText]}
        numberOfLines={numberOfLines}
        adjustsFontSizeToFit={adjustsFontSizeToFit}>
        {children}
      </Text>
    }>
    <LinearGradient colors={colors} start={start} end={end} style={styles.gradientFill}>
      <Text
        style={[style, styles.gradientHiddenText]}
        numberOfLines={numberOfLines}
        adjustsFontSizeToFit={adjustsFontSizeToFit}>
        {children}
      </Text>
    </LinearGradient>
  </MaskedView>
);

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
              <View style={styles.greetingRow}>
                <Icon name={getGreetingIcon()} size={moderateScale(13)} color={Colors.accent} />
                <Text style={styles.greetingTime}>{getGreeting()}</Text>
              </View>
              <Text style={styles.greeting}>Rahul Kapoor</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <View style={styles.notifDot} />
            <Icon name="bell-outline" size={moderateScale(20)} color={Colors.accent} />
          </TouchableOpacity>
        </View>

        {/* Commission Balance Card - Hero Card */}
        <Card gradient style={styles.balanceCard}>
          {/* Decorative circles */}
          <View style={styles.decorCircle1} />
          <View style={styles.decorCircle2} />

          <View style={styles.balanceLabelRow}>
            <View style={styles.labelIconBg}>
              <Icon name="wallet-outline" size={moderateScale(12)} color={Colors.accent} />
            </View>
            <Text style={styles.balanceLabel}>COMMISSION BALANCE</Text>
          </View>
          <GradientText style={styles.balanceAmount} adjustsFontSizeToFit numberOfLines={1}>₹2,450.00</GradientText>
          <Text style={styles.balanceSub}>5,450 USDT</Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.withdrawCTA}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.withdrawGradient}>
              <Icon name="bank-transfer-out" size={moderateScale(16)} color={Colors.black} />
              <Text style={styles.withdrawText}>Withdraw</Text>
              <Icon name="chevron-right" size={moderateScale(16)} color={Colors.black} />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.balanceDivider} />

          <View style={styles.balanceRow}>
            <View style={styles.balanceCol}>
              <View style={styles.balanceDotRow}>
                <View style={[styles.balanceDot, { backgroundColor: Colors.accent }]} />
                <Text style={styles.balanceColLabel}>ONE TIME</Text>
              </View>
              <GradientText style={styles.balanceColValue} colors={['#F5B700', '#FFD54F']}>₹1,29,504</GradientText>
              <Text style={styles.balanceColSub}>$1500.00</Text>
            </View>
            <View style={styles.balanceColDivider} />
            <View style={styles.balanceCol}>
              <View style={styles.balanceDotRow}>
                <View style={[styles.balanceDot, { backgroundColor: Colors.green }]} />
                <Text style={styles.balanceColLabel}>RECURRING</Text>
              </View>
              <GradientText style={styles.balanceColValue} colors={['#00E676', '#00C853']}>₹50,616</GradientText>
              <Text style={styles.balanceColSub}>$650.80</Text>
            </View>
          </View>
        </Card>

        {/* Lifetime Earnings Card */}
        <Card>
          <View style={styles.balanceLabelRow}>
            <View style={[styles.labelIconBg, { backgroundColor: '#7C4DFF15' }]}>
              <Icon name="chart-line" size={moderateScale(12)} color={Colors.secondary} />
            </View>
            <Text style={styles.balanceLabel}>LIFETIME EARNINGS</Text>
          </View>
          <GradientText style={styles.lifetimeAmount} adjustsFontSizeToFit numberOfLines={1}>₹4,820.60</GradientText>
          <Text style={styles.balanceSub}>5,450 USDT</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>YESTERDAY</Text>
                <GradientText style={styles.statValue}>₹3,17,010</GradientText>
                <Text style={styles.statSub}>$8.42</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>THIS MONTH</Text>
                <GradientText style={styles.statValue}>₹3,17,010</GradientText>
                <Text style={styles.statSub}>$380.40</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>LAST MONTH</Text>
                <GradientText style={styles.statValue}>₹3,17,010</GradientText>
                <Text style={styles.statSub}>$310.20</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Mini Stats Row - glassmorphism style */}
        <View style={styles.miniStatsContainer}>
          <View style={styles.miniStatItem}>
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.miniStatCard}>
              <View style={[styles.miniStatIconBg, { backgroundColor: '#F5B70015' }]}>
                <Icon name="account-group-outline" size={moderateScale(18)} color={Colors.accent} />
              </View>
              <Text style={styles.miniStatValue}>12</Text>
              <Text style={styles.miniStatLabel}>INVESTORS</Text>
            </LinearGradient>
          </View>
          <View style={styles.miniStatItem}>
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.miniStatCard}>
              <View style={[styles.miniStatIconBg, { backgroundColor: '#00E67615' }]}>
                <Icon name="chart-box-outline" size={moderateScale(18)} color={Colors.green} />
              </View>
              <Text style={styles.miniStatValue}>$48.2K</Text>
              <Text style={styles.miniStatLabel}>TOTAL AUM</Text>
            </LinearGradient>
          </View>
          <View style={styles.miniStatItem}>
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.miniStatCard}>
              <View style={[styles.miniStatIconBg, { backgroundColor: '#00E67615' }]}>
                <Icon name="trending-up" size={moderateScale(18)} color={Colors.green} />
              </View>
              <Text style={[styles.miniStatValue, { color: Colors.green }]}>+18%</Text>
              <Text style={styles.miniStatLabel}>RETURNS</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Target Milestones */}
        <SectionHeader title="TARGET MILESTONES" />
        <Card>
          <View style={styles.milestoneHeader}>
            <View>
              <Text style={styles.milestoneTitle}>This Month's Commission</Text>
              <Text style={styles.milestoneSub}>14% of ₹2L target</Text>
            </View>
            <View style={styles.milestoneValueBadge}>
              <GradientText style={styles.milestoneValue} colors={['#F5B700', '#FFD54F']}>₹27,720</GradientText>
            </View>
          </View>
          <ProgressBar
            progress={0.14}
            label="₹0"
            subLabel="₹1,72,280 remaining to reach ₹2L"
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
          <QuickActionButton icon="share-variant-outline" label="Share" subtitle="Invite Friends" accentColor={Colors.secondary} />
          <QuickActionButton icon="swap-horizontal" label="Transactions" subtitle="View History" accentColor={Colors.blue} />
          <QuickActionButton icon="cash-multiple" label="Commissions" subtitle="View Breakdown" onPress={() => navigation.navigate('Commissions')} />
          <QuickActionButton icon="basket-outline" label="Baskets" subtitle="Browse All" onPress={() => navigation.navigate('MyInvestors')} accentColor={Colors.green} />
          <QuickActionButton icon="calculator-variant-outline" label="Calculator" subtitle="SIP & Returns" accentColor={Colors.cyan} />
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
    paddingBottom: Spacing.xxl + Spacing.xl,
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
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  avatarInner: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(21),
    backgroundColor: '#0E0E18',
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
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
    marginTop: 2,
  },
  notificationBtn: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(14),
    backgroundColor: Colors.cardBg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  notifDot: {
    position: 'absolute',
    top: moderateScale(8),
    right: moderateScale(9),
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.red,
    zIndex: 1,
    borderWidth: 2,
    borderColor: Colors.cardBg,
  },
  // Balance Card
  balanceCard: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  decorCircle1: {
    position: 'absolute',
    top: -moderateScale(30),
    right: -moderateScale(30),
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    backgroundColor: '#F5B70012',
  },
  decorCircle2: {
    position: 'absolute',
    bottom: -moderateScale(50),
    left: -moderateScale(20),
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    backgroundColor: '#00E67612',
  },
  balanceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.sm,
  },
  labelIconBg: {
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(7),
    backgroundColor: '#F5B70015',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  gradientMaskText: {
    backgroundColor: 'transparent',
  },
  gradientFill: {
    width: '100%',
  },
  gradientHiddenText: {
    opacity: 0,
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
    elevation: 6,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  withdrawGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.sm + 4,
    borderRadius: BorderRadius.round,
    gap: Spacing.sm,
  },
  withdrawText: {
    color: Colors.black,
    fontSize: FontSize.sm,
    fontWeight: '800',
  },
  balanceDivider: {
    height: 1,
    backgroundColor: '#1A1A28',
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
    width: moderateScale(7),
    height: moderateScale(7),
    borderRadius: moderateScale(4),
  },
  balanceColLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs - 1,
    fontWeight: '700',
    letterSpacing: 0.8,
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
    backgroundColor: '#0A0A14',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: '#1A1A28',
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
    fontSize: FontSize.xs - 1,
    fontWeight: '700',
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
  miniStatsContainer: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  miniStatItem: {
    flex: 1,
  },
  miniStatCard: {
    alignItems: 'center',
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.sm,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  miniStatIconBg: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderRadius: moderateScale(11),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  miniStatValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '800',
  },
  miniStatLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs - 1,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  // Milestones
  milestoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  milestoneValueBadge: {
    backgroundColor: '#F5B70015',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.round,
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
    height: Spacing.xxl,
  },
});

export default HomeScreen;
