"use client";

import { useEffect } from "react";
import Script from "next/script";
import { handleContactLinkClick } from "@/utils/gaHelper";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;
    document.addEventListener("click", handleContactLinkClick);
    return () => document.removeEventListener("click", handleContactLinkClick);
  }, []);

  if (!GA_ID) return null;

  // Client-side route changes are recorded as page views by GA4's
  // enhanced measurement ("page changes based on browser history events").
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
