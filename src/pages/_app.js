import React from 'react'

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'

import '../../public/css/reset.css'
import '../../public/css/colors.css'
import '../../public/css/layout.css'
import '../../public/css/components.css'
import '../../public/css/typography.css'
import '../../public/css/misc.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}