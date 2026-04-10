import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize, Spacing, moderateScale } from '../theme';

interface StatItemProps {
  label: string;
  value: string;
  valueColor?: string;
  small?: boolean;
  icon?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, valueColor, small, icon }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={moderateScale(small ? 14 : 18)}
          color={valueColor || Colors.accent}
          style={styles.icon}
        />
      )}
      <Text style={[styles.value, small && styles.valueSmall, valueColor ? { color: valueColor } : null]}>
        {value}
      </Text>
      <Text style={[styles.label, small && styles.labelSmall]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginBottom: Spacing.xs,
  },
  label: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
    textTransform: 'uppercase',
    marginTop: Spacing.xs,
  },
  labelSmall: {
    fontSize: 9,
  },
  value: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '700',
  },
  valueSmall: {
    fontSize: FontSize.sm,
  },
});

export default StatItem;
