"use client";
import Script from "next/script";

interface Props {
  GA_TRACKING_ID: string;
}

function GoogleAnalytics({ GA_TRACKING_ID }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', "${GA_TRACKING_ID}")
        `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
