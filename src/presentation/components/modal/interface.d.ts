/**
 * IMPORTS
 */
import type React from 'react';

interface IModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClosedModal: () => void;
}

/**
 * EXPORTS
 */
export type { IModalProps };
