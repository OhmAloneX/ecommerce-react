import "./image.css";
import { useState } from "react";
 
 export default function Image({
   src,
   alt,
   aspect = "1-1",
   loading = "lazy",
   sizes,
   srcSet,
  fallbackSrc,
  className = "",
 }) {
   const ratioClass =
     aspect === "16-9" ? "ratio-16-9" : aspect === "4-3" ? "ratio-4-3" : "ratio-1-1";
  const [source, setSource] = useState(src);
 
   return (
    <div className={`img-wrap ${ratioClass} ${className}`}>
      <img
        src={source}
        alt={alt}
        loading={loading}
        sizes={sizes}
        srcSet={srcSet}
        onError={() => {
          if (fallbackSrc && source !== fallbackSrc) setSource(fallbackSrc);
        }}
      />
     </div>
   );
 }
