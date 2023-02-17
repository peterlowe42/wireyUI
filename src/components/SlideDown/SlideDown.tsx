import React, { useEffect, useRef } from "react";
import  { usePrev } from "../../util/usePrev";
import "./SlideDown.css"

export interface SlideDownProps {
  isOpen: boolean,
  children: JSX.Element[]
}

const SlideDown = ({ children, isOpen }:SlideDownProps):JSX.Element => {
  const slideRef = useRef<HTMLDivElement>(null)
  const firstPaint = useRef(true)
  const prevOpen = usePrev(isOpen)

  const slideUp = () => {
    setOpenHeight()
    if (slideRef.current) slideRef.current.className = 'wu-slidedown-container'
    setTimeout(() => {
      slideRef.current?.removeAttribute('style')
    }, 10);
  }
  
  const slideDown = () => {
    setOpenHeight()

    setTimeout(() => {
      if (slideRef.current) slideRef.current.className = 'wu-slidedown-container open'
      slideRef.current?.removeAttribute('style')
    }, 300)
  }

  const setOpenHeight = () => {
    var openHeight = slideRef.current?.scrollHeight;
    if (slideRef.current) slideRef.current.style.height = `${openHeight}px`;
  }

  useEffect(() => {
    if (firstPaint.current) {
      firstPaint.current = false;
      return;
    }
    prevOpen ? slideUp() : slideDown()
  }, [isOpen])

  return (
    <div ref={slideRef} className='wu-slidedown-container'>
      {children}
    </div>
  )
}

export default SlideDown