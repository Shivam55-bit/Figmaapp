import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSize, Spacing, BorderRadius, moderateScale } from '../theme';

interface QuickActionButtonProps {
  icon: string;
  label: string;
  subtitle?: string;
  onPress?: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={['#252525', '#1A1A1A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.iconContainer}>
        <Icon name={icon} size={moderateScale(24)} color={Colors.accent} />
      </LinearGradient>
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
  iconContainer: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    elevation: 4,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  label: {
    color: Colors.textPrimary,
    fontSize: FontSize.sm,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default QuickActionButton;
