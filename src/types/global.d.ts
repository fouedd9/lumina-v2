export {};

declare global {
  interface Window {
    fbq?: (
      action: "track",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}
