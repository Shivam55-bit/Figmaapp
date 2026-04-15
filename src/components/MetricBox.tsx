import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize, Spacing, BorderRadius, moderateScale } from '../theme';

interface MetricBoxProps {
  label: string;
  value: string;
  subValue?: string;
  valueColor?: string;
  small?: boolean;
  icon?: string;
  iconColor?: string;
}

const MetricBox: React.FC<MetricBoxProps> = ({ label, value, subValue, valueColor, small, icon, iconColor }) => {
  const color = iconColor || Colors.accent;
  return (
    <View style={[styles.container, small && styles.containerSmall]}>
      <View style={styles.header}>
        {icon && (
          <View style={[styles.iconContainer, { backgroundColor: `${color}15` }]}>
            <Icon name={icon} size={moderateScale(14)} color={color} />
          </View>
        )}
        <Text style={styles.label} numberOfLines={1}>{label}</Text>
      </View>
      <Text style={[styles.value, valueColor ? { color: valueColor } : null, small && styles.valueSmall]}>
        {value}
      </Text>
      {subValue && <Text style={styles.subValue}>{subValue}</Text>}
      {/* Decorative bottom accent */}
      <View style={[styles.bottomAccent, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    borderWidth: 1.5,
    borderColor: Colors.cardBorder,
    padding: Spacing.lg,
    flex: 1,
    marginHorizontal: Spacing.xs,
    overflow: 'hidden',
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  containerSmall: {
    padding: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  iconContainer: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  label: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '700',
    flex: 1,
    letterSpacing: 0.5,
  },
  value: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '900',
  },
  valueSmall: {
    fontSize: FontSize.lg,
  },
  subValue: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 4,
    letterSpacing: 0.2,
  },
  bottomAccent: {
    position: 'absolute',
    bottom: 0,
    left: Spacing.lg,
    right: Spacing.lg,
    height: 2.5,
    borderRadius: 1,
    opacity: 0.6,
  },
});

export default MetricBox;
