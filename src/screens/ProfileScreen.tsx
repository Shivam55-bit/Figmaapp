import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Spacing, BorderRadius, FontSize, moderateScale} from '../theme';
import {Card} from '../components';

const ProfileScreen = ({navigation}: any) => {
  const [biometricEnabled, setBiometricEnabled] = React.useState(false);

  const menuSections = [
    {
      title: 'ACCOUNT',
      items: [
        {icon: 'account-edit-outline', label: 'Edit Profile', chevron: true},
        {icon: 'bank-outline', label: 'Bank Accounts', chevron: true},
        {icon: 'shield-check-outline', label: 'KYC Verification', badge: 'Verified', badgeColor: Colors.kycVerifiedBg, badgeTextColor: Colors.kycVerifiedText},
        {icon: 'file-document-outline', label: 'Documents', chevron: true},
      ],
    },
    {
      title: 'PREFERENCES',
      items: [
        {icon: 'bell-outline', label: 'Notifications', chevron: true},
        {icon: 'translate', label: 'Language', value: 'English', chevron: true},
        {icon: 'currency-inr', label: 'Currency', value: 'INR (₹)', chevron: true},
        {icon: 'fingerprint', label: 'Biometric Login', toggle: true},
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        {icon: 'help-circle-outline', label: 'Help & FAQ', chevron: true},
        {icon: 'chat-outline', label: 'Contact Support', chevron: true},
        {icon: 'information-outline', label: 'About', chevron: true},
        {icon: 'file-lock-outline', label: 'Privacy Policy', chevron: true},
        {icon: 'text-box-check-outline', label: 'Terms of Service', chevron: true},
      ],
    },
  ];

  const renderMenuItem = (item: any, index: number, isLast: boolean) => (
    <TouchableOpacity
      key={index}
      style={[styles.menuItem, !isLast && styles.menuItemBorder]}
      activeOpacity={0.6}>
        <View style={styles.menuItemLeft}>
        <View style={styles.menuIconContainer}>
          <Icon name={item.icon} size={moderateScale(20)} color={Colors.accent} />
        </View>
        <Text style={styles.menuItemLabel}>{item.label}</Text>
      </View>
      <View style={styles.menuItemRight}>
        {item.value && <Text style={styles.menuItemValue}>{item.value}</Text>}
        {item.badge && (
          <View style={[styles.badge, {backgroundColor: item.badgeColor}]}>
            <Text style={[styles.badgeText, {color: item.badgeTextColor}]}>
              {item.badge}
            </Text>
          </View>
        )}
        {item.toggle && (
          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{false: Colors.cardBorder, true: Colors.accentDark}}
            thumbColor={biometricEnabled ? Colors.accent : Colors.textMuted}
          />
        )}
        {item.chevron && (
          <Icon name="chevron-right" size={moderateScale(20)} color={Colors.textMuted} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsBtn}>
            <Icon name="cog-outline" size={moderateScale(22)} color={Colors.accent} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <Card gradient style={styles.profileCard}>
          <LinearGradient
            colors={['#F5B700', '#FFD54F', '#F5B700']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.avatarRing}>
            <View style={styles.avatarInner}>
              <Text style={styles.avatarInitials}>RK</Text>
            </View>
          </LinearGradient>
          <Text style={styles.profileName}>Rahul Kapoor</Text>
          <Text style={styles.profileUsername}>@rahul_kapoor</Text>
          <Text style={styles.memberSince}>Member since Mar 2024</Text>
          <View style={styles.profileBadge}>
            <Icon name="check-decagram" size={moderateScale(14)} color={Colors.accent} />
            <Text style={styles.profileBadgeText}>Verified Partner</Text>
          </View>

          <View style={styles.profileStatsRow}>
            <View style={styles.profileStatItem}>
              <Icon name="account-group-outline" size={moderateScale(16)} color={Colors.accent} />
              <Text style={styles.profileStatValue}>12</Text>
              <Text style={styles.profileStatLabel}>Investors</Text>
            </View>
            <View style={styles.profileStatDivider} />
            <View style={styles.profileStatItem}>
              <Icon name="chart-box-outline" size={moderateScale(16)} color={Colors.green} />
              <Text style={styles.profileStatValue}>$48.2K</Text>
              <Text style={styles.profileStatLabel}>Total AUM</Text>
            </View>
            <View style={styles.profileStatDivider} />
            <View style={styles.profileStatItem}>
              <Icon name="trending-up" size={moderateScale(16)} color={Colors.green} />
              <Text style={[styles.profileStatValue, {color: Colors.green}]}>
                +18%
              </Text>
              <Text style={styles.profileStatLabel}>Returns</Text>
            </View>
          </View>
        </Card>

        {/* Referral Card */}
        <Card style={styles.referralCard}>
          <View style={styles.referralLeft}>
            <View style={styles.referralIconContainer}>
              <Icon name="gift-outline" size={moderateScale(22)} color={Colors.accent} />
            </View>
            <View style={styles.referralTextContainer}>
              <Text style={styles.referralTitle}>Refer & Earn</Text>
              <Text style={styles.referralSub}>
                Earn ₹500 per referral
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={['#F5B700', '#FFD54F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.referralBtn}>
              <Text style={styles.referralBtnText}>INVITE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, sIndex) => (
          <View key={sIndex}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Card style={styles.menuCard}>
              {section.items.map((item, index) =>
                renderMenuItem(item, index, index === section.items.length - 1),
              )}
            </Card>
          </View>
        ))}

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
          <LinearGradient
            colors={['#3B1A1A', '#1A1A1A']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.logoutGradient}>
            <Icon name="logout" size={moderateScale(20)} color={Colors.red} />
            <Text style={styles.logoutText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>

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
  headerTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxl,
    fontWeight: '700',
  },
  settingsBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.cardBg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  // Profile Card
  profileCard: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  avatarRing: {
    width: moderateScale(84),
    height: moderateScale(84),
    borderRadius: moderateScale(42),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarInner: {
    width: moderateScale(76),
    height: moderateScale(76),
    borderRadius: moderateScale(38),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitials: {
    color: Colors.accent,
    fontSize: FontSize.xxl,
    fontWeight: '800',
  },
  profileName: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '700',
  },
  profileUsername: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    marginTop: 2,
  },
  memberSince: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 4,
    fontStyle: 'italic',
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dormantBadgeBg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.round,
    marginTop: Spacing.sm,
    gap: 4,
  },
  profileBadgeText: {
    color: Colors.accent,
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
  profileStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: Spacing.xl,
    paddingTop: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  profileStatItem: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
  },
  profileStatValue: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  profileStatLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    marginTop: 4,
  },
  profileStatDivider: {
    width: 1,
    height: moderateScale(36),
    backgroundColor: Colors.divider,
  },
  // Referral Card
  referralCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#3D3000',
    borderWidth: 1,
  },
  referralLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: Spacing.md,
  },
  referralIconContainer: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(21),
    backgroundColor: '#2A2000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  referralTextContainer: {
    flex: 1,
  },
  referralTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  referralSub: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 2,
  },
  referralBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
  },
  referralBtnText: {
    color: Colors.black,
    fontSize: FontSize.sm,
    fontWeight: '800',
  },
  // Menu
  sectionTitle: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: Spacing.sm,
    marginTop: Spacing.lg,
  },
  menuCard: {
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md + 2,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(12),
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  menuItemLabel: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '500',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  menuItemValue: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.round,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
  // Logout
  logoutBtn: {
    marginTop: Spacing.sm,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#3B1A1A',
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md + 2,
  },
  logoutText: {
    color: Colors.red,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  versionText: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
  bottomSpacer: {
    height: Spacing.lg,
  },
});

export default ProfileScreen;
