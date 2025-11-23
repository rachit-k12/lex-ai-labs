export const logError = (...params: any[]) => {
  console.error(...params);
};

export const logInfo = (...params: any[]) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  console.info(...params);
};

export const logDebug = (...params: any[]) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  console.debug(...params);
};
