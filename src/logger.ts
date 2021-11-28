export const log = (message?: string, level?: 'info' | 'warning' | 'danger') => {
  switch (level || 'info') {
    case 'info':
      console.log(`[INFO] ${message}`);
      break;
    default:
      return;
  }
};
