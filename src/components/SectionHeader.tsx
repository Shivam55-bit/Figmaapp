import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSize, Spacing, BorderRadius, moderateScale } from '../theme';

interface SectionHeaderProps {
  title: string;
  rightText?: string;
  onRightPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, rightText, onRightPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <LinearGradient
          colors={['#F5B700', '#FFD54F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.accentBar}
        />
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
    marginBottom: Spacing.lg,
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.xs,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accentBar: {
    width: moderateScale(4),
    height: moderateScale(20),
    borderRadius: 2,
    marginRight: Spacing.md,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1.8,
  },
  rightButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5B70015',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: '#F5B70025',
  },
  rightText: {
    color: Colors.accent,
    fontSize: FontSize.sm,
    fontWeight: '700',
    marginRight: Spacing.xs,
  },
});

export default SectionHeader;
