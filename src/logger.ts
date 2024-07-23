// import ReactGA from "react-ga4";

// export const logEvent = (action: string, category: string, label?: string, value?: number) => {
//   ReactGA.event({
//     category,
//     action,
//     label,
//     value,
//   });
// };

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const logEvent = (action: string, category: string, label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
