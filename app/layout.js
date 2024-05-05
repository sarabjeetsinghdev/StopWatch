import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Providers } from "./provider"
import '@/app/styles/tailwind.css'
import '@/app/styles/custom.css'

export const metadata = {
  title: 'StopWatch',
  description: 'A digital timer that counts the time elapsed since it was started. It typically displays hours, minutes, seconds, and milliseconds or centiseconds. The stopwatch can be started, stopped, and reset as needed. The start button begins the timer, the stop button pauses it, and the reset button resets the time to zero.',
  creator: 'Sarabjeet Singh',
  author: 'Sarabjeet Singh',
  keywords: ["stopwatch", "timer", "countdown", "countup", "nodejs", "javascript", "react", "nextjs"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
