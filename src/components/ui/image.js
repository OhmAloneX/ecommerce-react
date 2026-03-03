 import "./image.css";
 
 export default function Image({
   src,
   alt,
   aspect = "1-1",
   loading = "lazy",
   sizes,
   srcSet,
 }) {
   const ratioClass =
     aspect === "16-9" ? "ratio-16-9" : aspect === "4-3" ? "ratio-4-3" : "ratio-1-1";
 
   return (
     <div className={`img-wrap ${ratioClass}`}>
       <img src={src} alt={alt} loading={loading} sizes={sizes} srcSet={srcSet} />
     </div>
   );
 }
