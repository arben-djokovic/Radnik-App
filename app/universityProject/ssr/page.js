import React from 'react'

export default async function Page() {
  try {
    // 🟢 Fetch both endpoints in parallel for better performance
    const [songsRes, genresRes] = await Promise.all([
      fetch('https://repertorify.com/api/songs', { cache: 'no-store' }),
      fetch('https://repertorify.com/api/genres', { cache: 'no-store' }),
    ]);

    // 🧠 Check if responses are OK
    if (!songsRes.ok || !genresRes.ok) {
      throw new Error('Failed to fetch songs or genres');
    }

    // ✅ Parse JSON data
    const [songs, genres] = await Promise.all([
      songsRes.json(),
      genresRes.json(),
    ]);

    // 🖼️ Render UI
    return (
      <div>
        <div className="border border-black">
          <h1>songs</h1>
          <div>
            {Array.isArray(songs.songs) && songs.songs.length > 0 ? (
              songs.songs.map((song) => (
                <div key={song._id}>{song.title}</div>
              ))
            ) : (
              <p>No songs found.</p>
            )}
          </div>
        </div>

        <div className="border border-black">
          <h1>genres</h1>
          <div>
            {Array.isArray(genres.genres) && genres.genres.length > 0 ? (
              genres.genres.map((genre) => (
                <div key={genre._id}>{genre.name}</div>
              ))
            ) : (
              <p>No genres found.</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // 🔴 Handle errors gracefully
    console.error('Error loading data:', error);
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>We couldn’t load songs or genres. Please try again later.</p>
      </div>
    );
  }
}
