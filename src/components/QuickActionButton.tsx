import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSize, Spacing, moderateScale } from '../theme';

interface QuickActionButtonProps {
  icon: string;
  label: string;
  subtitle?: string;
  onPress?: () => void;
  accentColor?: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, subtitle, onPress, accentColor }) => {
  const color = accentColor || Colors.accent;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconOuter}>
        <LinearGradient
          colors={['#1E1E2E', '#12121A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconContainer}>
          <View style={[styles.iconGlow, { backgroundColor: `${color}15` }]} />
          <Icon name={icon} size={moderateScale(22)} color={color} />
        </LinearGradient>
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      {subtitle && (
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '30%',
    marginBottom: Spacing.xl,
  },
  iconOuter: {
    borderRadius: moderateScale(18),
    padding: 2,
    marginBottom: Spacing.sm,
  },
  iconContainer: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(18),
    borderWidth: 1.5,
    borderColor: '#F5B70025',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
  },
  iconGlow: {
    position: 'absolute',
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(19),
  },
  label: {
    color: Colors.textPrimary,
    fontSize: FontSize.sm,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
    letterSpacing: 0.2,
  },
});

export default QuickActionButton;
