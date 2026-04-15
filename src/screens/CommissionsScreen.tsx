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
import { Card, SectionHeader, MetricBox, ProgressBar } from '../components';

const CommissionsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.backBtnBg}>
              <Icon name="chevron-left" size={moderateScale(22)} color={Colors.accent} />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Commissions</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Balance Card */}
        <Card gradient style={styles.balanceCard}>
          <View style={styles.decorCircle1} />
          <View style={styles.decorCircle2} />
          <View style={styles.balanceLabelRow}>
            <View style={styles.labelIconBg}>
              <Icon name="wallet-outline" size={moderateScale(12)} color={Colors.accent} />
            </View>
            <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
          </View>
          <Text style={styles.balanceAmount} adjustsFontSizeToFit numberOfLines={1}>₹2,450.00</Text>
          <Text style={styles.balanceSub}>5,450 USDT</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.withdrawBtnShadow}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.withdrawBtn}>
              <Icon name="bank-transfer-out" size={moderateScale(16)} color={Colors.black} />
              <Text style={styles.withdrawBtnText}>Withdraw to Bank</Text>
              <Icon name="chevron-right" size={moderateScale(16)} color={Colors.black} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addToApp}>Add to your Investor App →</Text>
          </TouchableOpacity>
        </Card>

        {/* Total Earned Section */}
        <Card>
          <View style={styles.totalEarnedRow}>
            <View style={styles.totalEarnedCol}>
              <View style={styles.totalEarnedLabelRow}>
                <Icon name="chart-arc" size={moderateScale(12)} color={Colors.accent} />
                <Text style={styles.totalEarnedLabel}>Total Earned (Lifetime)</Text>
              </View>
              <Text style={styles.totalEarnedValue}>₹3,000.80</Text>
              <Text style={styles.totalEarnedSub}>$3,200.80</Text>
            </View>
            <View style={styles.totalEarnedDivider} />
            <View style={styles.totalEarnedColRight}>
              <View style={styles.totalEarnedLabelRow}>
                <Icon name="bank-transfer-out" size={moderateScale(12)} color={Colors.green} />
                <Text style={styles.totalEarnedLabel}>Withdrawn</Text>
              </View>
              <Text style={[styles.totalEarnedValue, { color: Colors.green }]}>₹7500.00</Text>
              <Text style={styles.totalEarnedSub}>$750.00</Text>
            </View>
          </View>
        </Card>

        {/* Commission Timeline */}
        <SectionHeader title="COMMISSION TIMELINE" />
        <Card>
          {[
            { label: 'Yesterday', value: '+$8.42', dotColor: Colors.green, icon: 'clock-outline' },
            { label: 'This Month (Mar)', value: '+$380.40', dotColor: Colors.green, icon: 'calendar-month' },
            { label: 'Last Month (Feb)', value: '+$310.20', dotColor: Colors.accent, icon: 'calendar-check' },
          ].map((item, index) => (
            <View key={index}>
              {index > 0 && <View style={styles.divider} />}
              <View style={styles.timelineRow}>
                <View style={styles.timelineLeft}>
                  <View style={[styles.timelineDot, { backgroundColor: `${item.dotColor}20` }]}>
                    <View style={[styles.timelineDotInner, { backgroundColor: item.dotColor }]} />
                  </View>
                  <Text style={styles.timelineLabel}>{item.label}</Text>
                </View>
                <View style={[styles.timelineValueBadge, { backgroundColor: `${item.dotColor}12` }]}>
                  <Text style={[styles.timelineValue, { color: item.dotColor }]}>{item.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </Card>

        {/* Breakdown */}
        <SectionHeader title="BREAKDOWN" />
        <View style={styles.metricBoxRow}>
          <MetricBox label="One-Time Earned" value="$1,800" icon="cash-check" iconColor={Colors.green} />
          <MetricBox label="Recurring Accrued" value="$650.80" valueColor={Colors.accent} icon="refresh" iconColor={Colors.accent} />
        </View>

        {/* Monthly Average */}
        <SectionHeader title="MONTHLY AVERAGE" />
        <Card>
          <View style={styles.monthlyAvgHeader}>
            <View>
              <Text style={styles.monthlyAvgLabel}>Avg Commission / Month</Text>
              <Text style={styles.monthlyAvgValue}>$320.08</Text>
            </View>
            <View style={styles.monthlyAvgRight}>
              <View style={styles.growthBadge}>
                <Icon name="arrow-up-bold" size={moderateScale(12)} color={Colors.green} />
                <Text style={styles.growthBadgeText}>+12%</Text>
              </View>
              <Text style={styles.monthlyAvgBasedOn}>10 months</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.monthlyAvgFooter}>
            <View style={styles.monthlyAvgFooterCol}>
              <Text style={styles.monthlyAvgFooterLabel}>Avg One-Time / mo</Text>
              <Text style={styles.monthlyAvgFooterValue}>$180.00</Text>
            </View>
            <View style={styles.monthlyAvgFooterCol}>
              <Text style={styles.monthlyAvgFooterLabel}>Avg Recurring / mo</Text>
              <Text style={[styles.monthlyAvgFooterValue, { color: Colors.accent }]}>$140.08</Text>
            </View>
          </View>
        </Card>

        {/* Target Milestones */}
        <SectionHeader title="TARGET MILESTONES" />
        <Card>
          <View style={styles.milestoneHeader}>
            <Text style={styles.milestoneTitle}>This Month's Commission</Text>
            <View style={styles.milestoneValueBadge}>
              <Text style={styles.milestoneValue}>₹27,720</Text>
            </View>
          </View>
          <ProgressBar
            progress={0.14}
            label="₹0"
            subLabel="14% · ₹1,72,280 to reach ₹2L"
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

        {/* CTA Button */}
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={['#2A2008', '#18182A']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.ctaBtn}>
            <Icon name="history" size={moderateScale(18)} color={Colors.accent} />
            <Text style={styles.ctaBtnText}>View Full Commission History</Text>
            <Icon name="chevron-right" size={moderateScale(18)} color={Colors.accent} />
          </LinearGradient>
        </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
  },
  backBtn: {},
  backBtnBg: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  headerTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '700',
  },
  headerRight: {
    width: moderateScale(38),
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
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    backgroundColor: '#F5B70008',
  },
  decorCircle2: {
    position: 'absolute',
    bottom: -moderateScale(20),
    left: -moderateScale(20),
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
    backgroundColor: '#00E67608',
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
  balanceAmount: {
    color: Colors.textPrimary,
    fontSize: FontSize.hero,
    fontWeight: '800',
  },
  balanceSub: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 2,
    marginBottom: Spacing.lg,
  },
  withdrawBtnShadow: {
    elevation: 6,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginBottom: Spacing.md,
  },
  withdrawBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.round,
    gap: Spacing.sm,
  },
  withdrawBtnText: {
    color: Colors.black,
    fontSize: FontSize.md,
    fontWeight: '800',
  },
  addToApp: {
    color: Colors.accent,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },
  // Total Earned
  totalEarnedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalEarnedCol: {
    flex: 1,
  },
  totalEarnedColRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalEarnedDivider: {
    width: 1,
    height: moderateScale(50),
    backgroundColor: Colors.divider,
    marginHorizontal: Spacing.md,
  },
  totalEarnedLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  totalEarnedLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
  },
  totalEarnedValue: {
    color: Colors.accent,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  totalEarnedSub: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 2,
  },
  // Timeline
  timelineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  timelineLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  timelineDot: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineDotInner: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  timelineLabel: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
    fontWeight: '500',
  },
  timelineValueBadge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.round,
  },
  timelineValue: {
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
  },
  // Metric Box Row
  metricBoxRow: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    marginHorizontal: -Spacing.xs,
  },
  // Monthly Average
  monthlyAvgHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  monthlyAvgLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginBottom: 4,
  },
  monthlyAvgValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxxl,
    fontWeight: '800',
  },
  monthlyAvgRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  growthBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.activeBadgeBg,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 3,
    borderRadius: BorderRadius.round,
    gap: 2,
  },
  growthBadgeText: {
    color: Colors.green,
    fontSize: FontSize.xs,
    fontWeight: '700',
  },
  monthlyAvgBasedOn: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  monthlyAvgFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.md,
  },
  monthlyAvgFooterCol: {},
  monthlyAvgFooterLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginBottom: 4,
  },
  monthlyAvgFooterValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
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
  // CTA
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: '#3D300030',
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
    marginTop: Spacing.sm,
    elevation: 6,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  ctaBtnText: {
    color: Colors.accent,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: Spacing.xxl,
  },
});

export default CommissionsScreen;
