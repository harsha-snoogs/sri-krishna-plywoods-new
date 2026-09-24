"use client";

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

// Maps a clicked link to a GA4 event name. Returns null for links we don't track.
function getContactEventName(href: string): string | null {
  if (href.startsWith("tel:")) return "click_to_call";
  if (href.includes("wa.me/")) return "whatsapp_click";
  if (href.includes("google.com/maps")) return "get_directions";
  return null;
}

// Which part of the layout the click came from, so reports can compare CTAs.
function getLinkLocation(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest(".mobile-action-bar")) return "mobile_action_bar";
  return "page_content";
}

/**
 * Document-level listener that tracks call / WhatsApp / directions clicks
 * from any link on the site, including links rendered by server components.
 */
export function handleContactLinkClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") ?? "";
  const eventName = getContactEventName(href);
  if (!eventName) return;

  trackEvent(eventName, {
    link_location: getLinkLocation(link),
    link_text: (link.textContent ?? "").trim().slice(0, 100),
    page_path: window.location.pathname,
  });
}
