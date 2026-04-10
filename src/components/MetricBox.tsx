import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
  return (
    <View style={[styles.container, small && styles.containerSmall]}>
      <View style={styles.header}>
        {icon && (
          <View style={[styles.iconContainer, iconColor ? { backgroundColor: `${iconColor}18` } : null]}>
            <Icon name={icon} size={moderateScale(14)} color={iconColor || Colors.accent} />
          </View>
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={[styles.value, valueColor ? { color: valueColor } : null, small && styles.valueSmall]}>
        {value}
      </Text>
      {subValue && <Text style={styles.subValue}>{subValue}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: Spacing.lg,
    flex: 1,
    marginHorizontal: Spacing.xs,
  },
  containerSmall: {
    padding: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  iconContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: '#F5B70018',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.xs,
  },
  label: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
  },
  value: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '800',
  },
  valueSmall: {
    fontSize: FontSize.lg,
  },
  subValue: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    marginTop: 2,
  },
});

export default MetricBox;
