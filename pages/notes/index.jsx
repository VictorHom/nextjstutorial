// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({ notes }) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                  <br /> {note.id}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NODE_ENV === "development" ? process.env.HOST: "https://nextjstutorial-git-master.victorhom.vercel.app"}/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}