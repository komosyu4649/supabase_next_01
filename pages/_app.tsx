import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      console.log(`fcp: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'LCP':
      console.log(`lcp: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'TTFB':
      console.log(`ttfb: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'Next.js-hydration':
      console.log(
        `hydration: ${Math.round(metric.startTime * 10) / 10} -> ${
          Math.round(metric.value * 10) / 10
        }`
      )
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
