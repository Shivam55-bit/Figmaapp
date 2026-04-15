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
  const investor = route?.params?.investor;
  const name = investor?.name ?? 'Priya Sharma';
  const initials = name
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  const joinedDate = investor?.joinedDate ?? '15 Mar 2026';
  const invested = investor?.invested ?? '10,000';
  const current = investor?.current ?? '$11,800';
  const returnPercent = investor?.returnPercent ?? '+18%';

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
          <Text style={styles.headerTitle}>Investor Detail</Text>
          <TouchableOpacity style={styles.moreBtn}>
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.backBtnBg}>
              <Icon name="dots-vertical" size={moderateScale(20)} color={Colors.textSecondary} />
            </LinearGradient>
          </TouchableOpacity>
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
                <Text style={styles.investorAvatarText}>{initials}</Text>
              </View>
            </LinearGradient>
            <View style={styles.investorNameCol}>
              <View style={styles.investorNameRow}>
                <Text style={styles.investorName}>{name}</Text>
                <View style={styles.kycBadge}>
                  <Icon name="check-circle" size={moderateScale(12)} color={Colors.green} />
                  <Text style={styles.kycBadgeText}>KYC Verified</Text>
                </View>
              </View>
              <View style={styles.joinedRow}>
                <Icon name="calendar-clock" size={moderateScale(12)} color={Colors.textMuted} />
                <Text style={styles.joinedDate}>Joined {joinedDate}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsRow}>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <LinearGradient colors={['#0D3B1E', '#12121A']} style={styles.actionBtnInner}>
              <View style={styles.actionIconBg}>
                <Icon name="phone-outline" size={moderateScale(16)} color={Colors.green} />
              </View>
              <Text style={styles.actionBtnText}>Call</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <LinearGradient colors={['#2A2008', '#12121A']} style={styles.actionBtnInner}>
              <View style={[styles.actionIconBg, { backgroundColor: '#F5B70015' }]}>
                <Icon name="message-outline" size={moderateScale(16)} color={Colors.accent} />
              </View>
              <Text style={styles.actionBtnTextAlt}>Message</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <LinearGradient colors={['#1A1A2E', '#12121A']} style={styles.actionBtnInner}>
              <View style={[styles.actionIconBg, { backgroundColor: '#7C4DFF15' }]}>
                <Icon name="share-variant-outline" size={moderateScale(16)} color="#B388FF" />
              </View>
              <Text style={[styles.actionBtnTextAlt, { color: '#B388FF' }]}>Share</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Investment Summary */}
        <Card>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol}>
              <Text style={styles.summaryLabel}>TOTAL INVESTED</Text>
              <Text style={styles.summaryValue}>${invested}</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={[styles.summaryCol, { alignItems: 'flex-end' }]}>
              <Text style={styles.summaryLabel}>CURRENT VALUE</Text>
              <Text style={[styles.summaryValue, { color: Colors.green }]}>{current}</Text>
            </View>
          </View>
          <View style={styles.returnRow}>
            <LinearGradient colors={['#0D3B1E', '#12121A']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.returnBadge}>
              <Icon name="trending-up" size={moderateScale(14)} color={Colors.green} />
              <Text style={styles.returnValue}>{returnPercent} Returns</Text>
            </LinearGradient>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol}>
              <Text style={styles.summarySmallLabel}>WALLET BALANCE</Text>
              <Text style={styles.summarySmallValue}>$1,250.00 USDT</Text>
            </View>
            <View style={[styles.summaryCol, { alignItems: 'flex-end' }]}>
              <Text style={styles.summarySmallLabel}>ACTIVE INVESTMENTS</Text>
              <Text style={styles.summarySmallValue}>2</Text>
            </View>
          </View>
        </Card>

        {/* Commission Card */}
        <Card style={styles.commissionCard}>
          <View style={styles.commissionTitleRow}>
            <View style={styles.commissionIconBg}>
              <Icon name="cash-multiple" size={moderateScale(14)} color={Colors.accent} />
            </View>
            <Text style={styles.commissionTitle}>Your Commission</Text>
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
              <LinearGradient colors={['#0D3B1E', '#12121A']} style={styles.investmentIcon}>
                <Icon name="basket-outline" size={moderateScale(18)} color={Colors.green} />
              </LinearGradient>
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
            {[
              { label: 'INVESTED', value: '$7,000' },
              { label: 'CURRENT', value: '$8,260', color: Colors.green },
              { label: 'MATURITY', value: '9 mo' },
            ].map((s, i) => (
              <View key={i} style={styles.investmentStatCol}>
                <Text style={styles.investmentStatLabel}>{s.label}</Text>
                <Text style={[styles.investmentStatValue, s.color ? { color: s.color } : {}]}>{s.value}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Basket Alpha - SIP */}
        <Card>
          <View style={styles.investmentHeader}>
            <View style={styles.investmentLeft}>
              <LinearGradient colors={['#1A2A3A', '#12121A']} style={styles.investmentIcon}>
                <Icon name="basket-outline" size={moderateScale(18)} color={Colors.sipBadgeText} />
              </LinearGradient>
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
            {[
              { label: 'MONTHLY', value: '$500' },
              { label: 'TOTAL IN', value: '$500' },
              { label: 'MATURITY', value: '11 mo' },
            ].map((s, i) => (
              <View key={i} style={styles.investmentStatCol}>
                <Text style={styles.investmentStatLabel}>{s.label}</Text>
                <Text style={styles.investmentStatValue}>{s.value}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Download Button */}
        <TouchableOpacity activeOpacity={0.8} style={styles.downloadBtnShadow}>
          <LinearGradient
            colors={['#FF5252', '#D32F2F']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.downloadBtn}>
            <Icon name="file-download-outline" size={moderateScale(18)} color={Colors.white} />
            <Text style={styles.downloadBtnText}>Download Portfolio Summary</Text>
            <Icon name="chevron-right" size={moderateScale(16)} color={Colors.white} />
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
  backBtn: {},
  moreBtn: {},
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
  // Investor Info
  investorInfo: {
    marginBottom: Spacing.lg,
  },
  investorTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investorAvatarRing: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  investorAvatarInner: {
    width: moderateScale(54),
    height: moderateScale(54),
    borderRadius: moderateScale(27),
    backgroundColor: '#0A0A14',
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
  joinedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  joinedDate: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
  },
  // Action Buttons
  actionButtonsRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  actionBtn: {
    flex: 1,
  },
  actionBtnInner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 4,
  },
  actionIconBg: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: '#00E67615',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: {
    color: Colors.green,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },
  actionBtnTextAlt: {
    color: Colors.accent,
    fontSize: FontSize.sm,
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
  summaryDivider: {
    width: 1,
    height: moderateScale(40),
    backgroundColor: Colors.divider,
    marginHorizontal: Spacing.md,
  },
  summaryValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxl,
    fontWeight: '800',
  },
  summaryLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  returnRow: {
    marginBottom: Spacing.md,
  },
  returnBadge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    gap: 6,
    borderWidth: 1,
    borderColor: '#0D3B1E',
  },
  returnValue: {
    color: Colors.green,
    fontSize: FontSize.sm,
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
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  commissionIconBg: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(9),
    backgroundColor: '#F5B70015',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#3D300030',
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
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(13),
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
    borderRadius: BorderRadius.round,
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
    borderRadius: BorderRadius.round,
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
    backgroundColor: '#0A0A14',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
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
  downloadBtnShadow: {
    elevation: 6,
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginTop: Spacing.sm,
  },
  downloadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
  },
  downloadBtnText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: Spacing.xxl,
  },
});

export default InvestorDetailScreen;
