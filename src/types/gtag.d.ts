interface Window {
  dataLayer: Record<string, unknown>[];
  gtag: (
    command: string,
    eventNameOrConfig: string | Date,
    params?: Record<string, unknown>,
  ) => void;
}
