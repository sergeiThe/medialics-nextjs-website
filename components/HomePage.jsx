import React from 'react'
import data from '../data/data'


export default function HomePage() {
  return (
    <section>
      <div>
        <h1>{data.home.title}</h1>
      </div>
      <div>
        <p>{data.home.about}</p>
        <button>Kontakt</button>
      </div>
      <div>
        Technologies...
      </div>
    </section>
  )
}
