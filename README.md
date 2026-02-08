# Gemini Markdown Downloader

A simple yet powerful Chrome extension that allows you to export Gemini AI conversation content as formatted Markdown files with just one click.

## ✨ Features

- 🚀 **One-Click Export**: Click the extension icon to quickly download the current Gemini conversation.
- 📝 **Full Formatting**: Uses the Turndown library to preserve code blocks, lists, links, and other formatting.
- 🎯 **Smart Naming**: Automatically generates filenames based on the conversation title.
- 🔒 **Safe and Secure**: Activates only on Gemini pages, no extra permissions required.
- ⚡ **High Performance**: Lightweight design that does not affect page loading speed.
- 🎨 **Clear Structure**: User queries and Gemini responses are clearly marked for easy reading.

## 📦 Installation

### Install from Source (Developer Mode)

1. **Download Source Code**
   ```bash
   git clone https://github.com/x-hansong/gemini_md_downloader.git
   cd gemini_md
   ```

2. **Open Chrome Extensions Page**
   - Enter `chrome://extensions/` in the Chrome address bar.
   - Or go to Menu → More Tools → Extensions.

3. **Enable Developer Mode**
   - Click the "Developer mode" switch in the top right corner of the page.

4. **Load Extension**
   - Click "Load unpacked".
   - Select the project folder.
   - The extension installation is complete!

## 🚀 Usage

### Basic Usage

1. **Visit Gemini**
   - Open [Gemini AI](https://gemini.google.com).
   - Start or continue a conversation.

2. **Export Conversation**
   - Click the extension icon in the browser toolbar.
   - The conversation content will be automatically downloaded as a `.md` file.

3. **View File**
   - The file is saved in the browser's default download directory.
   - Filename format: `Conversation Title.md`.

### Output Format Example

```markdown
# Conversation Title

## User

Your question content...

---

## Gemini

Gemini's response content, including:
- Full formatting
- **Bold** and *italic* text
- `Code snippets`
- Links and lists, etc.

---
```

## 🔧 Technical Implementation

### Core Tech Stack

- **Chrome Extension Manifest V3**: Modern extension architecture.
- **Turndown.js**: High-quality HTML to Markdown conversion library.
- **Content Scripts**: Page content extraction and processing.
- **Background Scripts**: Extension lifecycle management.

### How It Works

1. **Page Detection**: Background script verifies if the current page is a Gemini page.
2. **Content Extraction**: Content script extracts conversation content via DOM selectors.
3. **Format Conversion**: Uses Turndown to convert HTML content to Markdown.
4. **File Generation**: Creates a Blob object and triggers the download.

### Key Features

- **Smart Selectors**: Adapted to the DOM structure of Gemini pages.
- **Filename Cleaning**: Automatically handles special characters to ensure valid filenames.
- **Error Handling**: Comprehensive logging and error handling mechanisms.

## 📁 File Structure

```
gemini_md/
├── manifest.json          # Chrome extension configuration file
├── background.js          # Background service script
├── content.js             # Content script (main logic)
├── turndown.js            # Turndown library file
├── icon48.png             # Extension icon (48x48)
├── icon128.png            # Extension icon (128x128)
├── icon_generator.html    # Icon generation tool
└── README.md              # Project documentation
```

### File Description

| File | Function |
|------|------|
| `manifest.json` | Extension configuration, defines permissions, script loading, etc. |
| `background.js` | Handles extension icon click events, page verification. |
| `content.js` | Core functionality implementation, extracts and converts conversation content. |
| `turndown.js` | Third-party library, HTML to Markdown conversion. |
| `icon*.png` | Icons for the extension in the toolbar and store. |

## 📋 Version History

### v1.5 (Current Version)
- ✅ Integrated Turndown library to improve conversion quality.
- ✅ Optimized Markdown output format.
- ✅ Improved file naming logic.
- ✅ Enhanced error handling and logging.
- ✅ Support for conversion of more HTML elements.

### Major Improvements
- **Better Format Preservation**: Perfect conversion of code blocks, lists, links, etc.
- **Custom Conversion Rules**: Optimized for special elements on Gemini pages.
- **Stability Improvements**: More reliable content extraction and error handling.

## 🤝 Contribution

Issues and Pull Requests are welcome!

## 📄 License

MIT License

---

**Enjoy using Gemini Markdown Downloader!** 🎉
