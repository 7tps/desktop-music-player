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

### Option 1: Download Pre-built Executable (Windows)
Windows users can download the pre-built `MP3 Player.exe` file from the releases section and run it directly - no installation required.

Mac users can download the pre-built `MP3 Player.dmg` file from the releases section and run it directly - no installation required.

### Option 2: Build from Source
1. **Clone or download** this project
2. **Install dependencies**:
   ```
   npm install
   ```
3. **Run the application**:
   ```
   npm start
   ```

## Building the Application

### Prerequisites
- **Node.js** and **npm** installed
- **For Mac builds**: macOS computer required (Apple requirement)

### Build Commands

#### Windows (Portable Executable)
```bash
npm run build:win
```
Creates a portable `.exe` file in the `dist/` folder.

#### macOS (DMG Installer)
```bash
npm run build:mac
```
Creates a `.dmg` installer file in the `dist/` folder.

#### All Platforms
```bash
npm run build
```
Builds for all configured platforms.

### Build Output

#### Windows
- **`MP3 Player 1.0.0.exe`** - Portable executable (no installation required)
- **`win-unpacked/`** - Unpacked application with all dependencies

#### macOS
- **`MP3 Player 1.0.0.dmg`** - Disk image installer
- **`MP3 Player.app`** - Application bundle

### Build Configuration

The app is configured with:
- **App Name**: "MP3 Player"
- **Version**: 1.0.0
- **Windows**: Portable executable target
- **macOS**: DMG installer with music category
- **Custom Icons**: Supports `.ico` (Windows) and `.icns` (macOS)

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

## Technical Details

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

### Window Properties
- **Size**: 360x540 pixels (non-resizable)
- **Frame**: Custom frameless window
- **Always on Top**: Stays above other applications
- **Custom Controls**: Minimize and close buttons

## Development

### Project Structure
The application uses a simple Electron architecture:
- **Main Process** (`main.js`): Handles window creation and file dialogs
- **Renderer Process** (`renderer.js`): Manages UI interactions and audio playback
- **IPC Communication**: Secure communication between processes

### Key Functions
- `initAudioPlayer()`: Initialize HTML5 Audio API
- `togglePlayPause()`: Handle play/pause functionality
- `updatePlaylistView()`: Refresh playlist display
- `loadAndPlayTrack()`: Load and play selected track

### Build System
- **electron-builder**: Packaging and distribution
- **Cross-platform**: Supports Windows and macOS
- **Portable builds**: No installation required for Windows
- **Custom icons**: Platform-specific icon formats

## Customization

### Styling
The app uses a custom pixel art theme with:
- Dark background (`#181818`)
- White text with pixel font (Press Start 2P)
- Custom scrollbar styling
- Sharp corners and borders

### Adding Features
- **Metadata Support**: Extract artist/title from audio files
- **Volume Control**: Add volume slider
- **Keyboard Shortcuts**: Global hotkeys for playback
- **Playlist Saving**: Save and load playlists

## Troubleshooting

### Common Issues
- **Audio not playing**: Check file format compatibility
- **Window not appearing**: Ensure Electron is properly installed
- **File selection not working**: Verify file permissions
- **Build fails**: Ensure all dependencies are installed

### File Paths
- Windows: Uses backslashes (`\`) in file paths
- Cross-platform: Handles both forward and backward slashes

### Build Issues
- **Mac builds**: Require macOS computer (Apple requirement)
- **Icon files**: Create `assets/icon.ico` (Windows) and `assets/icon.icns` (macOS)
- **Large builds**: Generated files can be 100MB+ due to Electron runtime

## License

This project is open source and available under the ISC license.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the application. 
