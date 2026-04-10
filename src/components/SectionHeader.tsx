import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize, Spacing, moderateScale } from '../theme';

interface SectionHeaderProps {
  title: string;
  rightText?: string;
  onRightPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, rightText, onRightPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.accentBar} />
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightText && (
        <TouchableOpacity onPress={onRightPress} style={styles.rightButton} activeOpacity={0.7}>
          <Text style={styles.rightText}>{rightText}</Text>
          <Icon name="chevron-right" size={moderateScale(16)} color={Colors.accent} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
    marginTop: Spacing.lg,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accentBar: {
    width: moderateScale(3),
    height: moderateScale(14),
    backgroundColor: Colors.accent,
    borderRadius: 2,
    marginRight: Spacing.sm,
  },
  title: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  rightButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    color: Colors.accent,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },
});

export default SectionHeader;
