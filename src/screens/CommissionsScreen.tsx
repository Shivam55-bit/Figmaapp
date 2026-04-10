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
            <Icon name="chevron-left" size={moderateScale(28)} color={Colors.accent} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Commissions</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Balance Card */}
        <Card gradient style={styles.balanceCard}>
          <View style={styles.balanceLabelRow}>
            <Icon name="wallet-outline" size={moderateScale(14)} color={Colors.accent} />
            <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
          </View>
          <Text style={styles.balanceAmount} adjustsFontSizeToFit numberOfLines={1}>₹2,450.00</Text>
          <Text style={styles.balanceSub}>5,450 USDT</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.withdrawBtn}>
              <Icon name="bank-transfer-out" size={moderateScale(16)} color={Colors.black} />
              <Text style={styles.withdrawBtnText}>Withdraw to Bank</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.addToApp}>Add to your Investor App</Text>
        </Card>

        {/* Total Earned Section */}
        <Card>
          <View style={styles.totalEarnedRow}>
            <View style={styles.totalEarnedCol}>
              <Text style={styles.totalEarnedLabel}>Total Earned (Lifetime)</Text>
              <Text style={styles.totalEarnedValue}>₹3,000.80</Text>
              <Text style={styles.totalEarnedSub}>$3,200.80</Text>
            </View>
            <View style={styles.totalEarnedColRight}>
              <Text style={styles.totalEarnedLabel}>Withdrawn</Text>
              <Text style={styles.totalEarnedValue}>₹7500.00</Text>
              <Text style={styles.totalEarnedSub}>$750.00</Text>
            </View>
          </View>
        </Card>

        {/* Commission Timeline */}
        <SectionHeader title="COMMISSION TIMELINE" />
        <Card>
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={[styles.timelineDot, { backgroundColor: Colors.green }]} />
              <Text style={styles.timelineLabel}>Yesterday</Text>
            </View>
            <Text style={[styles.timelineValue, { color: Colors.green }]}>+$8.42</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={[styles.timelineDot, { backgroundColor: Colors.green }]} />
              <Text style={styles.timelineLabel}>This Month (Mar)</Text>
            </View>
            <Text style={[styles.timelineValue, { color: Colors.green }]}>+$380.40</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={[styles.timelineDot, { backgroundColor: Colors.accent }]} />
              <Text style={styles.timelineLabel}>Last Month (Feb)</Text>
            </View>
            <Text style={[styles.timelineValue, { color: Colors.green }]}>+$310.20</Text>
          </View>
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
              <Text style={styles.monthlyAvgFooterValue}>$140.08</Text>
            </View>
          </View>
        </Card>

        {/* Target Milestones */}
        <SectionHeader title="TARGET MILESTONES" />
        <Card>
          <View style={styles.milestoneHeader}>
            <Text style={styles.milestoneTitle}>This Month's Commission</Text>
            <Text style={styles.milestoneValue}>₹27,720</Text>
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
            colors={['#2A2000', '#1A1A1A']}
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
  backBtn: {
    width: moderateScale(36),
    height: moderateScale(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '700',
  },
  headerRight: {
    width: moderateScale(36),
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
  },
  balanceSub: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 2,
    marginBottom: Spacing.lg,
  },
  withdrawBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  withdrawBtnText: {
    color: Colors.black,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  addToApp: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
  },
  // Total Earned
  totalEarnedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalEarnedCol: {
    flex: 1,
  },
  totalEarnedColRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalEarnedLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginBottom: 4,
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
    gap: Spacing.sm,
  },
  timelineDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    borderWidth: 2,
    borderColor: 'transparent',
  },
  timelineLabel: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
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
    backgroundColor: '#0D3B1E',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
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
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: '#3D3000',
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
    marginTop: Spacing.sm,
    elevation: 4,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  ctaBtnText: {
    color: Colors.accent,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: Spacing.lg,
  },
});

export default CommissionsScreen;
