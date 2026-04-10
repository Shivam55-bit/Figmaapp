import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, BorderRadius, Spacing, FontSize } from '../theme';

interface ProgressBarProps {
  progress: number; // 0-1
  label?: string;
  subLabel?: string;
  height?: number;
  showChips?: boolean;
  chips?: { label: string; active?: boolean }[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  subLabel,
  height = 8,
  showChips,
  chips,
}) => {
  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelRow}>
          <Text style={styles.label}>{label}</Text>
          {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
        </View>
      )}
      <View style={[styles.track, { height }]}>
        <LinearGradient
          colors={['#F5B700', '#FFD54F', '#F5B700']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.fill, { width: `${Math.min(progress * 100, 100)}%`, height }]}
        />
      </View>
      {showChips && chips && (
        <View style={styles.chipsRow}>
          {chips.map((chip, index) => (
            <View
              key={index}
              style={[
                styles.chip,
                chip.active ? styles.chipActive : styles.chipInactive,
              ]}>
              <Text
                style={[
                  styles.chipText,
                  chip.active ? styles.chipTextActive : styles.chipTextInactive,
                ]}>
                {chip.label}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.sm,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  label: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
  },
  subLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
  },
  track: {
    backgroundColor: Colors.progressBg,
    borderRadius: BorderRadius.round,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.round,
  },
  chipsRow: {
    flexDirection: 'row',
    marginTop: Spacing.md,
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs + 2,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  chipInactive: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.cardBorder,
  },
  chipText: {
    fontSize: FontSize.xs,
    fontWeight: '700',
  },
  chipTextActive: {
    color: Colors.black,
  },
  chipTextInactive: {
    color: Colors.textMuted,
  },
});

export default ProgressBar;
