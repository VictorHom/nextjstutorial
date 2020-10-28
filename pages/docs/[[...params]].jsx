import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default () => {
  <div>
    <h1>Index page</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
}