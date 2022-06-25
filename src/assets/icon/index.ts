const eyeClose = require('./eye-close.png');
const eyeOpen = require('./eye-open.png');
const emptyState = require('./empty-state.png');

export interface iconProps {
  name: 'eyeClose' | 'eyeOpen' | 'emptyState';
}

export const icons = {
  eyeClose,
  eyeOpen,
  emptyState,
};
