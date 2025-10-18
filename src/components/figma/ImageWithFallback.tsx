import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean
  skeletonClassName?: string
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const {
    src,
    alt,
    style,
    className,
    loading,
    lazy = true,
    skeletonClassName,
    ...rest
  } = props

  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(!lazy)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!lazy || isVisible) return

    const node = imgRef.current
    if (!node) return

    if ('loading' in HTMLImageElement.prototype) {
      node.loading = 'lazy'
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [lazy, isVisible])

  const handleError = () => setDidError(true)
  const handleLoad = () => setIsLoaded(true)

  const placeholder = useMemo(
    () => (
      <Skeleton
        className={skeletonClassName ?? 'w-full h-full bg-muted/60 animate-pulse rounded-xl'}
        style={style}
        data-testid="image-skeleton"
      />
    ),
    [className, skeletonClassName, style]
  )

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            {...rest}
            data-original-url={src}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {!isLoaded && placeholder}

      <img
        ref={imgRef}
        src={isVisible ? src : undefined}
        alt={alt}
        className={`${className ?? ''} ${
          !isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'
        }`.trim()}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
        loading={lazy ? 'lazy' : loading}
        {...rest}
      />

      {/* Example: If you want to show video instead of image when applicable */}
      {/* Replace 'currentVideo' with your actual video data object */}
      {/*
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        poster={currentVideo.thumbnail}
      >
        <source src={currentVideo.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}
    </>
  )
}
