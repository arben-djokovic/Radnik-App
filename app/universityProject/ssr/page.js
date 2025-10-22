import React from 'react'


export default async function page() {

  const songs = await fetch('https://repertorify.com/api/songs', { cache: 'no-store' }).then(res => res.json())
  const genres = await fetch('https://repertorify.com/api/genres', { cache: 'no-store' }).then(res => res.json())

  return (
    <div>
      <div className='border border-black'>
        <h1>songs</h1>
        <div>
          {Array.isArray(songs) && songs.length > 0 && songs.map((song) => (
            <div key={song._id}>
              {song.title}
            </div>
          ))}
        </div>
      </div>
      <div className='border border-black'>
        <h1>genres</h1>
        <div>
          {Array.isArray(genres) && genres.length > 0 && genres.map((genre) => (
            <div key={genre._id}>
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
