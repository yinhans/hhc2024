import { useEffect, useRef } from "react";

export default function StudyState() {
  const canva = useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    console.log(canva.current)
  })
  return (
    <>
      <div>
        <canvas ref={canva}></canvas>
      </div>
    </>
  );
}
