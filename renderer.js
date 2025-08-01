const { ipcRenderer } = require('electron');

// audio player state
let audioPlayer = null;
let currentTrackIndex = 0;
let playlist = [];
let isPlaying = false;

// initialize
function initAudioPlayer() {
    audioPlayer = new Audio();
    
    audioPlayer.addEventListener('ended', () => {
        playNext();
    });
    
    audioPlayer.addEventListener('timeupdate', () => {
        updateTimeDisplay();
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        updateTrackInfo();
    });
}

// update time
function updateTimeDisplay() {
    if (!audioPlayer) return;
    
    const currentTime = Math.floor(audioPlayer.currentTime);
    const duration = Math.floor(audioPlayer.duration);
    
    const currentTimeStr = formatTime(currentTime);
    const durationStr = formatTime(duration);
    
    document.getElementById('track-time').textContent = `${currentTimeStr} / ${durationStr}`;
}

// format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// update track info display
function updateTrackInfo() {
    if (playlist.length === 0) return;
    
    const currentTrack = playlist[currentTrackIndex];
    const fileName = currentTrack.split('\\').pop().split('/').pop(); // get filename from path
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, ""); // remove extension
    
    document.getElementById('track-title').textContent = nameWithoutExt;
    document.getElementById('track-artist').textContent = 'Unknown Artist'; // could be enhanced with metadata
    
    // update playlist view
    updatePlaylistView();
}

// update playlist view
function updatePlaylistView() {
    const container = document.getElementById('playlist-container');
    container.innerHTML = '';
    
    playlist.forEach((track, index) => {
        const fileName = track.split('\\').pop().split('/').pop();
        const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
        
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentTrackIndex ? 'current' : ''}`;
        item.innerHTML = `<span class="track-number">${(index + 1).toString().padStart(2, '0')}</span>${nameWithoutExt}`;
        
        item.addEventListener('click', () => {
            currentTrackIndex = index;
            loadAndPlayTrack();
            if (!isPlaying) {
                togglePlayPause(); // start playing if not already playing
            }
        });
        
        container.appendChild(item);
    });
}

// play/pause toggle
function togglePlayPause() {
    if (!audioPlayer || playlist.length === 0) return;
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        document.querySelector('#play-pause-btn img').src = 'assets/play.png';
    } else {
        audioPlayer.play();
        isPlaying = true;
        document.querySelector('#play-pause-btn img').src = 'assets/pause.png';
    }
}

// play next track
function playNext() {
    if (playlist.length === 0) return;
    
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadAndPlayTrack();
}

// play previous track
function playPrevious() {
    if (playlist.length === 0) return;
    
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadAndPlayTrack();
}

// load and play current track
function loadAndPlayTrack() {
    if (playlist.length === 0) return;
    
    const trackPath = playlist[currentTrackIndex];
    audioPlayer.src = trackPath;
    updateTrackInfo();
    
    if (isPlaying) {
        audioPlayer.play();
    }
}

// initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initAudioPlayer();
});

// window control buttons
document.getElementById('min-btn').addEventListener('click', () => {
  ipcRenderer.send('window-minimize');
});
document.getElementById('close-btn').addEventListener('click', () => {
  ipcRenderer.send('window-close');
});

// playback control buttons
document.getElementById('play-pause-btn').addEventListener('click', () => {
    togglePlayPause();
});

document.getElementById('next-btn').addEventListener('click', () => {
    playNext();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    playPrevious();
});

// file selection
document.getElementById('select-btn').addEventListener('click', async () => {
  try {
    const filePaths = await ipcRenderer.invoke('select-files');
    if (filePaths.length > 0) {
      playlist = filePaths;
      currentTrackIndex = 0;
      loadAndPlayTrack();
      console.log('loaded playlist:', playlist);
    }
  } catch (error) {
    console.error('error selecting files:', error);
  }
});