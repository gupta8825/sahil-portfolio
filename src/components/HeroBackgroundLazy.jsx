import { lazy, Suspense } from 'react'

const HeroBackground = lazy(() => import('./HeroBackground'))

function HeroBackgroundLazy() {
  return (
    <Suspense fallback={null}>
      <HeroBackground />
    </Suspense>
  )
}

export default HeroBackgroundLazy
