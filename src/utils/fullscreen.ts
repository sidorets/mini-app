import { viewport } from '@telegram-apps/sdk-react';

export const requestFullscreen = async (): Promise<void> => {
  try {
    await viewport.expand();
  } catch (error) {
    console.error('Failed to expand viewport:', error);
    throw error;
  }
}; 