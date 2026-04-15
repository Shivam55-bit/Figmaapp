import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Spacing, BorderRadius, FontSize, moderateScale } from '../theme';
import { InvestorCard, Card } from '../components';

const investorsData = [
  {
    id: '1',
    name: 'Priya Sharma',
    joinedDate: '15 Mar 2026',
    status: 'Active' as const,
    invested: '10,000',
    current: '$11,800',
    returnPercent: '+18%',
  },
  {
    id: '2',
    name: 'Amit Kumar',
    joinedDate: '02 Feb 2026',
    status: 'Active' as const,
    invested: '5,000',
    current: '$6,750',
    returnPercent: '+15%',
  },
  {
    id: '3',
    name: 'Neha Patel',
    joinedDate: '20 Jan 2026',
    status: 'Dormant' as const,
    invested: '8,000',
    current: '$9,520',
    returnPercent: '+19%',
  },
  {
    id: '4',
    name: 'Vikram Gupta',
    joinedDate: '10 Dec 2025',
    status: 'KYC Pending' as const,
    invested: '2,000',
    current: '$2,000',
    returnPercent: '0%',
  },
];

type FilterType = 'All' | 'Active' | 'Dormant';

const MyInvestorsScreen = ({ navigation }: any) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [searchText, setSearchText] = useState('');

  const filteredInvestors = investorsData.filter(investor => {
    const matchesFilter =
      activeFilter === 'All' || investor.status === activeFilter;
    const matchesSearch = investor.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeCount = investorsData.filter(i => i.status === 'Active').length;
  const dormantCount = investorsData.filter(i => i.status === 'Dormant').length;

  const filters: { label: string; value: FilterType; count?: number }[] = [
    { label: 'All', value: 'All' },
    { label: `Active (${activeCount})`, value: 'Active' },
    { label: `Dormant (${dormantCount})`, value: 'Dormant' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.backBtnBg}>
            <Icon name="chevron-left" size={moderateScale(22)} color={Colors.accent} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Investors</Text>
        <TouchableOpacity style={styles.sortBtn}>
          <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.backBtnBg}>
            <Icon name="sort-variant" size={moderateScale(20)} color={Colors.textSecondary} />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchIconBg}>
          <Icon name="magnify" size={moderateScale(18)} color={Colors.accent} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search investors..."
          placeholderTextColor={Colors.textMuted}
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Icon name="close-circle" size={moderateScale(18)} color={Colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      {/* Summary Stats */}
      <View style={styles.summaryRow}>
        {[
          { icon: 'account-group-outline', value: investorsData.length, label: 'Total', color: Colors.textPrimary, bg: '#F5B70012' },
          { icon: 'check-circle-outline', value: activeCount, label: 'Active', color: Colors.green, bg: '#00E67612' },
          { icon: 'clock-outline', value: dormantCount, label: 'Dormant', color: Colors.accent, bg: '#F5B70012' },
        ].map((stat, idx) => (
          <LinearGradient key={idx} colors={['#1A1A28', '#12121A']} style={styles.summaryItem}>
            <View style={[styles.summaryIconBg, { backgroundColor: stat.bg }]}>
              <Icon name={stat.icon} size={moderateScale(14)} color={stat.color} />
            </View>
            <Text style={[styles.summaryValue, { color: stat.color }]}>{stat.value}</Text>
            <Text style={styles.summaryLabel}>{stat.label}</Text>
          </LinearGradient>
        ))}
      </View>

      {/* Filter Chips */}
      <View style={styles.filtersRow}>
        {filters.map(filter => {
          const isActive = activeFilter === filter.value;
          return isActive ? (
            <TouchableOpacity key={filter.value} onPress={() => setActiveFilter(filter.value)} activeOpacity={0.8}>
              <LinearGradient
                colors={['#F5B700', '#FFD54F']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.filterChipActive}>
                <Text style={styles.filterChipTextActive}>{filter.label}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={filter.value}
              style={styles.filterChip}
              onPress={() => setActiveFilter(filter.value)}>
              <Text style={styles.filterChipText}>{filter.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Investor List */}
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}>
        {filteredInvestors.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="account-search-outline" size={moderateScale(48)} color={Colors.textMuted} />
            <Text style={styles.emptyStateText}>No investors found</Text>
          </View>
        ) : (
          filteredInvestors.map(investor => (
            <TouchableOpacity
              key={investor.id}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('InvestorDetail', { investor })}>
              <InvestorCard
                name={investor.name}
                joinedDate={investor.joinedDate}
                status={investor.status}
                invested={investor.invested}
                current={investor.current}
                returnPercent={investor.returnPercent}
              />
            </TouchableOpacity>
          ))
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <LinearGradient
          colors={['#F5B700', '#FFD54F']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.fabGradient}>
          <Icon name="plus" size={moderateScale(24)} color={Colors.black} />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  backBtn: {},
  sortBtn: {},
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
  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    marginHorizontal: Spacing.lg,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  searchIconBg: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: '#F5B70012',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    paddingVertical: Spacing.md,
  },
  // Summary
  summaryRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  summaryItem: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  summaryIconBg: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  summaryValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  summaryLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    marginTop: 2,
  },
  // Filters
  filtersRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  filterChip: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    backgroundColor: Colors.transparent,
  },
  filterChipActive: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    elevation: 4,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  filterChipText: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: Colors.black,
    fontSize: FontSize.sm,
    fontWeight: '700',
  },
  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxxl * 2,
    gap: Spacing.md,
  },
  emptyStateText: {
    color: Colors.textMuted,
    fontSize: FontSize.md,
  },
  // List
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
  },
  fab: {
    position: 'absolute',
    bottom: moderateScale(24),
    right: moderateScale(20),
    elevation: 10,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  fabGradient: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpacer: {
    height: Spacing.xxl,
  },
});

export default MyInvestorsScreen;
