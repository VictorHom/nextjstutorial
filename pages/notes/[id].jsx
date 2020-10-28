// pages/[id].jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({note}) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.id} </h1>
    </div>
  )
}

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.NODE_ENV === "development" ? process.env.HOST: "https://nextjstutorial-git-master.victorhom.vercel.app"}/api/note/${params.id}`)
  console.log("response", response)
  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}