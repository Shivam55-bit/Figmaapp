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
import { Card, SectionHeader } from '../components';

const InvestorDetailScreen = ({ navigation, route }: any) => {
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
          <Text style={styles.headerTitle}>Investors Detail</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Investor Info */}
        <View style={styles.investorInfo}>
          <View style={styles.investorTopRow}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F', '#F5B700']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.investorAvatarRing}>
              <View style={styles.investorAvatarInner}>
                <Text style={styles.investorAvatarText}>PS</Text>
              </View>
            </LinearGradient>
            <View style={styles.investorNameCol}>
              <View style={styles.investorNameRow}>
                <Text style={styles.investorName}>Priya Sharma</Text>
                <View style={styles.kycBadge}>
                  <Icon name="check-circle" size={moderateScale(12)} color={Colors.green} />
                  <Text style={styles.kycBadgeText}>KYC Verified</Text>
                </View>
              </View>
              <Text style={styles.joinedDate}>Joined 15 Mar 2026</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsRow}>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnCall]} activeOpacity={0.7}>
            <Icon name="phone-outline" size={moderateScale(18)} color={Colors.green} />
            <Text style={styles.actionBtnText}>Call Investor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnMsg]} activeOpacity={0.7}>
            <Icon name="message-outline" size={moderateScale(18)} color={Colors.accent} />
            <Text style={styles.actionBtnTextAlt}>Message</Text>
          </TouchableOpacity>
        </View>

        {/* Investment Summary */}
        <Card>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol}>
              <Text style={styles.summaryValue}>$10,000</Text>
              <Text style={styles.summaryLabel}>TOTAL INVESTED</Text>
            </View>
            <View style={styles.summaryCol}>
              <Text style={[styles.summaryValue, { color: Colors.green }]}>$11,800</Text>
              <Text style={styles.summaryLabel}>CURRENT VALUE</Text>
            </View>
          </View>
          <View style={styles.returnRow}>
            <Text style={styles.returnLabel}>Total Returns</Text>
            <View style={styles.returnValueRow}>
              <Icon name="trending-up" size={moderateScale(16)} color={Colors.green} />
              <Text style={styles.returnValue}> +$1,800 (+18%)</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol}>
              <Text style={styles.summarySmallLabel}>WALLET BALANCE</Text>
              <Text style={styles.summarySmallValue}>$1,250.00 USDT</Text>
            </View>
            <View style={styles.summaryCol}>
              <Text style={styles.summarySmallLabel}>ACTIVE INVESTMENTS</Text>
              <Text style={styles.summarySmallValue}>2</Text>
            </View>
          </View>
        </Card>

        {/* Commission Card */}
        <Card style={styles.commissionCard}>
          <View style={styles.commissionTitleRow}>
            <Icon name="cash-multiple" size={moderateScale(16)} color={Colors.accent} />
            <Text style={styles.commissionTitle}>Your Commission (This Investor)</Text>
          </View>
          <View style={styles.commissionGrid}>
            <View style={[styles.commissionGridItem, styles.commissionGridItemBorder]}>
              <Text style={styles.commissionGridLabel}>Total Earned</Text>
              <Text style={[styles.commissionGridValue, { color: Colors.accent }]}>$245.80</Text>
            </View>
            <View style={styles.commissionGridItem}>
              <Text style={styles.commissionGridLabel}>One-Time Earned</Text>
              <Text style={styles.commissionGridValue}>$200.00</Text>
            </View>
            <View style={[styles.commissionGridItem, styles.commissionGridItemBorder]}>
              <Text style={styles.commissionGridLabel}>Recurring (Monthly)</Text>
              <Text style={[styles.commissionGridValue, { color: Colors.green }]}>$15.27</Text>
            </View>
            <View style={styles.commissionGridItem}>
              <Text style={styles.commissionGridLabel}>Recurring Accrued</Text>
              <Text style={styles.commissionGridValue}>$45.80</Text>
            </View>
          </View>
        </Card>

        {/* Projected Remaining Commission */}
        <Card gradient style={styles.projectedCard}>
          <View style={styles.projectedTitleRow}>
            <Icon name="chart-timeline-variant-shimmer" size={moderateScale(14)} color={Colors.accent} />
            <Text style={styles.projectedTitle}>PROJECTED REMAINING COMMISSION</Text>
          </View>
          <View style={styles.projectedRow}>
            <View style={styles.projectedCol}>
              <Text style={styles.projectedLabel}>Remaining Term</Text>
              <Text style={styles.projectedValue}>9 months</Text>
            </View>
            <View style={styles.projectedDivider} />
            <View style={styles.projectedCol}>
              <Text style={styles.projectedLabel}>Projected Recurring</Text>
              <Text style={[styles.projectedValue, { color: Colors.accent }]}>$137.43</Text>
            </View>
          </View>
        </Card>

        {/* Investments */}
        <SectionHeader title="INVESTMENTS" rightText="View All" />

        {/* Basket Alpha - Lumpsum */}
        <Card>
          <View style={styles.investmentHeader}>
            <View style={styles.investmentLeft}>
              <View style={[styles.investmentIcon, { backgroundColor: '#1A3A1A' }]}>
                <Icon name="basket-outline" size={moderateScale(18)} color={Colors.green} />
              </View>
              <View>
                <Text style={styles.investmentName}>Basket Alpha</Text>
                <Text style={styles.investmentSub}>Premium Gold Investment</Text>
              </View>
            </View>
            <View style={styles.lumpSumBadge}>
              <Text style={styles.lumpSumBadgeText}>LUMPSUM</Text>
            </View>
          </View>
          <View style={styles.investmentStatsRow}>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>INVESTED</Text>
              <Text style={styles.investmentStatValue}>$7,000</Text>
            </View>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>CURRENT</Text>
              <Text style={[styles.investmentStatValue, { color: Colors.green }]}>$8,260</Text>
            </View>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>MATURITY</Text>
              <Text style={styles.investmentStatValue}>9 mo</Text>
            </View>
          </View>
        </Card>

        {/* Basket Alpha - SIP */}
        <Card>
          <View style={styles.investmentHeader}>
            <View style={styles.investmentLeft}>
              <View style={[styles.investmentIcon, { backgroundColor: '#1A2A3A' }]}>
                <Icon name="basket-outline" size={moderateScale(18)} color={Colors.sipBadgeText} />
              </View>
              <View>
                <Text style={styles.investmentName}>Basket Alpha</Text>
                <Text style={styles.investmentSub}>Systematic Investment Plan</Text>
              </View>
            </View>
            <View style={styles.sipBadge}>
              <Text style={styles.sipBadgeText}>SIP</Text>
            </View>
          </View>
          <View style={styles.investmentStatsRow}>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>MONTHLY</Text>
              <Text style={styles.investmentStatValue}>$500</Text>
            </View>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>TOTAL IN</Text>
              <Text style={styles.investmentStatValue}>$500</Text>
            </View>
            <View style={styles.investmentStatCol}>
              <Text style={styles.investmentStatLabel}>MATURITY</Text>
              <Text style={styles.investmentStatValue}>11 mo</Text>
            </View>
          </View>
        </Card>

        {/* Download Button */}
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={['#FF5252', '#D32F2F']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.downloadBtn}>
            <Icon name="download" size={moderateScale(18)} color={Colors.white} />
            <Text style={styles.downloadBtnText}>Download Portfolio Summary</Text>
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
    marginBottom: Spacing.lg,
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
  // Investor Info
  investorInfo: {
    marginBottom: Spacing.lg,
  },
  investorTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investorAvatarRing: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  investorAvatarInner: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  investorAvatarText: {
    color: Colors.accent,
    fontSize: FontSize.lg,
    fontWeight: '800',
  },
  investorNameCol: {
    flex: 1,
  },
  investorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    flexWrap: 'wrap',
  },
  investorName: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxl,
    fontWeight: '800',
  },
  kycBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.kycVerifiedBg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.round,
    gap: 4,
  },
  kycBadgeText: {
    color: Colors.kycVerifiedText,
    fontSize: FontSize.xs,
    fontWeight: '700',
  },
  joinedDate: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 4,
  },
  // Action Buttons
  actionButtonsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    backgroundColor: Colors.cardBg,
    gap: Spacing.sm,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  actionBtnCall: {
    borderColor: '#0D3B1E',
  },
  actionBtnMsg: {
    borderColor: '#3D3000',
  },
  actionBtnText: {
    color: Colors.green,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  actionBtnTextAlt: {
    color: Colors.accent,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  // Summary
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  summaryCol: {
    flex: 1,
  },
  summaryValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxl,
    fontWeight: '800',
  },
  summaryLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    marginTop: 2,
  },
  returnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  returnLabel: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
  },
  returnValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnValue: {
    color: Colors.green,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.md,
  },
  summarySmallLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginBottom: 4,
  },
  summarySmallValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
  },
  // Commission
  commissionCard: {
    backgroundColor: Colors.cardBg,
  },
  commissionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.lg,
  },
  commissionTitle: {
    color: Colors.accent,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  commissionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  commissionGridItem: {
    width: '50%',
    marginBottom: Spacing.md,
    paddingRight: Spacing.sm,
  },
  commissionGridItemBorder: {
    borderRightWidth: 1,
    borderRightColor: Colors.divider,
  },
  commissionGridLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginBottom: 4,
  },
  commissionGridValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  // Projected
  projectedCard: {
    borderColor: '#3D3000',
    borderWidth: 1,
  },
  projectedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: Spacing.md,
  },
  projectedTitle: {
    color: Colors.accent,
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 1,
  },
  projectedRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  projectedCol: {
    alignItems: 'center',
    flex: 1,
  },
  projectedDivider: {
    width: 1,
    height: moderateScale(36),
    backgroundColor: Colors.divider,
  },
  projectedLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginBottom: 4,
  },
  projectedValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  // Investments
  investmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  investmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    flex: 1,
  },
  investmentIcon: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  investmentName: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
  },
  investmentSub: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 2,
  },
  lumpSumBadge: {
    backgroundColor: Colors.lumpSumBadgeBg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.green,
  },
  lumpSumBadgeText: {
    color: Colors.green,
    fontSize: FontSize.xs,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sipBadge: {
    backgroundColor: Colors.sipBadgeBg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.sipBadgeText,
  },
  sipBadgeText: {
    color: Colors.sipBadgeText,
    fontSize: FontSize.xs,
    fontWeight: '800',
  },
  investmentStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  investmentStatCol: {
    flex: 1,
  },
  investmentStatLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginBottom: 4,
  },
  investmentStatValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
  },
  // Download
  downloadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  downloadBtnText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: Spacing.lg,
  },
});

export default InvestorDetailScreen;
