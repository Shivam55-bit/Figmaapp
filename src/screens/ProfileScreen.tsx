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
            <LinearGradient colors={['#1E1E2E', '#12121A']} style={styles.settingsBtnBg}>
              <Icon name="cog-outline" size={moderateScale(20)} color={Colors.accent} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <Card gradient style={styles.profileCard}>
          <View style={styles.decorCircle1} />
          <View style={styles.decorCircle2} />
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

          <View style={styles.profileBadge}>
            <Icon name="check-decagram" size={moderateScale(14)} color={Colors.accent} />
            <Text style={styles.profileBadgeText}>Verified Partner</Text>
          </View>

          <View style={styles.memberSinceRow}>
            <Icon name="calendar-clock" size={moderateScale(12)} color={Colors.textMuted} />
            <Text style={styles.memberSince}>Member since Mar 2024</Text>
          </View>

          <View style={styles.profileStatsRow}>
            {[
              { icon: 'account-group-outline', value: '12', label: 'Investors', color: Colors.accent },
              { icon: 'chart-box-outline', value: '$48.2K', label: 'Total AUM', color: Colors.green },
              { icon: 'trending-up', value: '+18%', label: 'Returns', color: Colors.green },
            ].map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <View style={styles.profileStatDivider} />}
                <View style={styles.profileStatItem}>
                  <View style={[styles.profileStatIconBg, { backgroundColor: `${stat.color}15` }]}>
                    <Icon name={stat.icon} size={moderateScale(14)} color={stat.color} />
                  </View>
                  <Text style={[styles.profileStatValue, { color: stat.color }]}>{stat.value}</Text>
                  <Text style={styles.profileStatLabel}>{stat.label}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </Card>

        {/* Referral Card */}
        <Card style={styles.referralCard}>
          <View style={styles.referralLeft}>
            <LinearGradient colors={['#2A2008', '#12121A']} style={styles.referralIconContainer}>
              <Icon name="gift-outline" size={moderateScale(20)} color={Colors.accent} />
            </LinearGradient>
            <View style={styles.referralTextContainer}>
              <Text style={styles.referralTitle}>Refer & Earn</Text>
              <Text style={styles.referralSub}>
                Earn ₹500 per referral
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.referralBtnShadow}>
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
            colors={['#3B1A1A', '#12121A']}
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
  settingsBtn: {},
  settingsBtnBg: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  // Profile Card
  profileCard: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
    overflow: 'hidden',
  },
  decorCircle1: {
    position: 'absolute',
    top: -moderateScale(25),
    right: -moderateScale(25),
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    backgroundColor: '#F5B70008',
  },
  decorCircle2: {
    position: 'absolute',
    bottom: -moderateScale(15),
    left: -moderateScale(15),
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#7C4DFF08',
  },
  avatarRing: {
    width: moderateScale(88),
    height: moderateScale(88),
    borderRadius: moderateScale(44),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarInner: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: '#0A0A14',
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
  memberSinceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: Spacing.sm,
  },
  memberSince: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontStyle: 'italic',
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
  profileStatIconBg: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
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
    marginTop: 2,
  },
  profileStatDivider: {
    width: 1,
    height: moderateScale(40),
    backgroundColor: Colors.divider,
  },
  // Referral Card
  referralCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#3D300030',
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
    borderRadius: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
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
  referralBtnShadow: {
    elevation: 4,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  referralBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
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
    backgroundColor: '#1A1A28',
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
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#3B1A1A',
    elevation: 4,
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
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
    height: Spacing.xxl,
  },
});

export default ProfileScreen;
