'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [songs, setSongs] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetch('https://repertorify.com/api/songs')
      const data = await response.json()
      setSongs(data)
    }
    getSongs()
  }, [])

    useEffect(() => {
    const getGeneres = async () => {
      const response = await fetch('https://repertorify.com/api/genres')
      const data = await response.json()
      setGenres(data)
    }
    getGeneres()
  }, [])
  return (
    <div>
      <div className='border border-black'>
        <h1>songs</h1>
        <div>
          {songs.map((song) => (
            <div key={song._id}>
              {song.title}
            </div>
          ))}
        </div>
      </div>
      <div className='border border-black'>
        <h1>genres</h1>
        <div>
          {genres.map((genre) => (
            <div key={genre._id}>
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
