import React, { useEffect, useRef } from 'react';

const AdSenseContainer = ({ adSlot, adFormat = 'auto', fullWidthResponsive = true }) => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAdSenseScript = () => {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6KFyaNQlFx5A53nCa6UjsKn9bdmn1K';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error('AdSense error:', error);
        }
      };
    };

    if (!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      loadAdSenseScript();
    } else if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6KFyaNQlFx5A53nCa6UjsKn9bdmn1K"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
      ref={adRef}
    />
  );
};

export default AdSenseContainer;