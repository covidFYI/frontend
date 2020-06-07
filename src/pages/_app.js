import React, { useEffect } from 'react'

import '../../public/css/reset.css'
import '../../public/css/colors.css'
import '../../public/css/layout.css'
import '../../public/css/components.css'
import '../../public/css/typography.css'
import '../../public/css/misc.css'

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return <Component {...pageProps} />
}