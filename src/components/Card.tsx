import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, BorderRadius, Spacing } from '../theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
  gradient?: boolean;
  glowColor?: string;
}

const Card: React.FC<CardProps> = ({ children, style, noPadding, gradient, glowColor }) => {
  const glowStyle = glowColor ? { shadowColor: glowColor, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8 } : {};
  if (gradient) {
    return (
      <LinearGradient
        colors={['#1F1A0D', '#1A1620', '#12121A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.card, styles.gradientCard, noPadding && styles.noPadding, glowStyle, style]}>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, backgroundColor: '#F5B70020' }} />
        {children}
      </LinearGradient>
    );
  }
  return (
    <View style={[styles.card, noPadding && styles.noPadding, glowStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    overflow: 'hidden',
  },
  gradientCard: {
    borderColor: '#F5B70030',
    borderWidth: 2,
    elevation: 12,
    shadowColor: '#F5B700',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
  },
  noPadding: {
    padding: 0,
  },
});

export default Card;
