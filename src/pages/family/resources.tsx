import { useState } from 'react';

const videos = [
  {
    id: '1',
    title:
      'Secret 1 - How To Maximize The Free Money And Reduce The Sticker Price Of College (Full Video)',
    url: 'https://www.youtube.com/watch?v=7SL1V212A8g&list=PLkST5yF3SU_vYW8-6HJJT1tGj2rVhNQ8R&index=2',
  },
  {
    id: '2',
    title: 'Secret 1 How To Maximize The Free Money For College (Section 1: Overview)',
    url: 'https://www.youtube.com/watch?v=WULywGOJu8w&list=PLkST5yF3SU_vYW8-6HJJT1tGj2rVhNQ8R&index=2',
  },
];

import YouTubePlaylist from '@codesweetly/react-youtube-playlist';
import Head from 'next/head';

const ResourcesPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="p-4 max-w-screen-desktop mx-auto">
      <Head>
        <title>Secret Resources</title>
      </Head>
      <h2 className="font-bold text-4xl mb-4">Secret Resources</h2>
      <YouTubePlaylist
        apiKey="AIzaSyC4QrMlrxU-7Xrny76Da2uI3nJ7YLM3BO4"
        playlistId="PLkST5yF3SU_vYW8-6HJJT1tGj2rVhNQ8R"
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
      />
    </div>
  );
};

export default ResourcesPage;
