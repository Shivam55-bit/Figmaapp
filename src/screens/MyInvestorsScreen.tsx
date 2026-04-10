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
          <Icon name="chevron-left" size={moderateScale(28)} color={Colors.accent} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Investors</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={moderateScale(20)} color={Colors.textMuted} style={styles.searchIcon} />
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
        <View style={styles.summaryItem}>
          <Icon name="account-group-outline" size={moderateScale(16)} color={Colors.textMuted} style={styles.summaryIcon} />
          <Text style={styles.summaryValue}>{investorsData.length}</Text>
          <Text style={styles.summaryLabel}>Total</Text>
        </View>
        <View style={[styles.summaryItem, styles.summaryItemActive]}>
          <Icon name="check-circle-outline" size={moderateScale(16)} color={Colors.green} style={styles.summaryIcon} />
          <Text style={[styles.summaryValue, { color: Colors.green }]}>{activeCount}</Text>
          <Text style={styles.summaryLabel}>Active</Text>
        </View>
        <View style={styles.summaryItem}>
          <Icon name="clock-outline" size={moderateScale(16)} color={Colors.accent} style={styles.summaryIcon} />
          <Text style={[styles.summaryValue, { color: Colors.accent }]}>{dormantCount}</Text>
          <Text style={styles.summaryLabel}>Dormant</Text>
        </View>
      </View>

      {/* Filter Chips */}
      <View style={styles.filtersRow}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter.value}
            style={[
              styles.filterChip,
              activeFilter === filter.value && styles.filterChipActive,
            ]}
            onPress={() => setActiveFilter(filter.value)}>
            <Text
              style={[
                styles.filterChipText,
                activeFilter === filter.value && styles.filterChipTextActive,
              ]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Investor List */}
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}>
        {filteredInvestors.map(investor => (
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
        ))}
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
  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    marginHorizontal: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  searchIcon: {
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
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  summaryIcon: {
    marginBottom: 4,
  },
  summaryItemActive: {
    borderColor: '#0D3B1E',
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
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    backgroundColor: Colors.transparent,
  },
  filterChipActive: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  filterChipText: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: Colors.black,
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
    elevation: 8,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpacer: {
    height: Spacing.lg,
  },
});

export default MyInvestorsScreen;
