# MP3 Player - Electron App

A custom MP3 player built with Electron featuring a retro pixel art aesthetic and modern audio playback functionality.

## Features

- **Audio Playback**: Support for MP3, WAV, FLAC, and M4A files
- **Playlist Management**: Load multiple tracks and navigate through them
- **Custom UI**: Pixel art inspired interface with sharp corners and dark theme
- **Always on Top**: Window stays above other applications
- **Custom Window Controls**: Minimize and close buttons with custom styling
- **Real-time Display**: Shows current track info and playback time
- **Click Navigation**: Click any track in the playlist to jump to it

## Installation

1. **Clone or download** this project
2. **Install dependencies**:
   ```
   npm install
   ```
3. **Run the application**:
   ```
   npm start
   ```

## Usage

### Loading Music
1. Click the **SELECT** button to open file dialog
2. Choose one or more audio files (MP3, WAV, FLAC, M4A)
3. Files will be added to the playlist automatically

### Playback Controls
- **Play/Pause**: Single button toggles between play and pause
- **Previous/Next**: Navigate through playlist tracks
- **Auto-advance**: Automatically plays next track when current ends
- **Playlist Loop**: Returns to first track after playing the last

### Interface
- **Track Info**: Displays current track name and artist
- **Time Display**: Shows current time and total duration (MM:SS format)
- **Playlist View**: Scrollable list of all loaded tracks
- **Current Track**: Highlighted in the playlist view

### Built With
- **Electron**: Cross-platform desktop application framework
- **HTML5 Audio API**: Native browser audio playback
- **CSS3**: Custom styling with pixel art aesthetic
- **JavaScript**: Audio controls and playlist management

### Audio Format Support
- **MP3**: Most widely supported format
- **WAV**: Uncompressed audio, guaranteed compatibility
- **FLAC**: Lossless compression
- **M4A**: Apple's audio format

### Common Issues
- **Audio not playing**: Check file format compatibility
- **Window not appearing**: Ensure Electron is properly installed
- **File selection not working**: Verify file permissions

## License

This project is open source and available under the ISC license.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the application. 