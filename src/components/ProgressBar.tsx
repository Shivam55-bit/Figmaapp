import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, BorderRadius, Spacing, FontSize } from '../theme';

interface ProgressBarProps {
  progress: number; // 0 - 1
  label?: string;
  subLabel?: string;
  height?: number;
  showChips?: boolean;
  chips?: { label: string; active?: boolean }[];
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  subLabel,
  height = 10,
  showChips,
  chips,
  color,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const progressPercent = clampedProgress * 100;

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelRow}>
          <Text style={styles.label}>{label}</Text>
          {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
        </View>
      )}

      <View style={[styles.track, { height }]}>
        {/* Progress Fill */}
        <LinearGradient
          colors={
            color
              ? [color, color]
              : ['#F5B700', '#FFD54F', '#FFA000']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.fill,
            {
              width: `${progressPercent}%`,
              height,
            },
          ]}
        />

        {/* Tip Glow (fixed position) */}
        <View
          style={[
            styles.tipGlow,
            {
              left: `${progressPercent}%`,
              transform: [{ translateX: -6 }], // center align
              backgroundColor: color || '#F5B700',
            },
          ]}
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
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  chip.active
                    ? styles.chipTextActive
                    : styles.chipTextInactive,
                ]}
              >
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
    marginVertical: Spacing.lg,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },

  label: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '600',
  },

  subLabel: {
    color: Colors.textMuted,
    fontSize: FontSize.xs,
    fontWeight: '500',
  },

  track: {
    backgroundColor: '#12121A',
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: '#2A2A3A',
    overflow: 'hidden',
  },

  fill: {
    borderRadius: BorderRadius.round,
  },

  tipGlow: {
    position: 'absolute',
    top: -3,
    width: 12,
    height: 16,
    borderRadius: 4,
    opacity: 0.7,
  },

  chipsRow: {
    flexDirection: 'row',
    marginTop: Spacing.lg,
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },

  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    borderWidth: 1.5,
    borderColor: Colors.cardBorder,
    backgroundColor: Colors.cardBg,
  },

  chipActive: {
    backgroundColor: '#F5B70030',
    borderColor: '#F5B700',
  },

  chipInactive: {
    backgroundColor: Colors.cardBg,
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