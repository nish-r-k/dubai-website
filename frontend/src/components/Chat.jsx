import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/68e4c0cfcadd4b19529126a9/1j6up2b6p";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkToWidget;


