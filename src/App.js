import React, {useEffect, useState} from 'react';
import './App.scss';

const initProfile = {
  name: null,
  followers: null,
  publicRepos: null
}

function App() {
  const [profile, setProfile] = useState(initProfile);

  async function getProfile(name) {
    const response = await fetch(`http://api.github.com/users/${name}`);
    const json = await response.json();

    setProfile({
      name: json.login,
      followers: json.followers,
      publicRepos: json.public_repos
    })
  }

  useEffect(() => {
    getProfile('mikegoodstadt')
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Fetch Data for: {profile.name}</h2>
        <h3>{`Followers: ${profile.followers}`}</h3>
        <h3>{`Pubic Repos: ${profile.publicRepos}`}</h3>
      </header>
    </div>
  );
}

export default App;
