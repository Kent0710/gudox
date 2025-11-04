# Gudox

**Gudox** is a web app that brings Git-like version control to research and collaborative writing.

---

## Inspiration  
I built Gudox after struggling to manage document revisions with my research team in high school. Google Docs’ history wasn’t enough we needed real version control for writing.

---

## What it does  
- Track every edit like a commit  
- Create and merge branches for drafts  
- Revert to past versions instantly  

Use Google Chrome’s built-in AI to:  
- Write  
- Rewrite  
- Summarize  
- Proofread  
- Auto-generate commit titles & descriptions

---

## Built with  
- Next.js  
- Firebase  
- Vercel  
- shadcn/ui  
- Chrome Built-in AI  

---

## Try it out  
[https://gudox.vercel.app/](https://gudox.vercel.app/)

---

## Tagline  
**WHERE RESEARCH EVOLVES LIKE CODE !**

---

## Requirements to run the AI features  

To integrate and use Chrome’s **Built-in AI APIs** (Prompt, Writer, Summarizer, Rewriter, Translator, and Proofreader APIs), ensure the following setup:

### Browser & API setup
- Use **Google Chrome (or Chrome Canary)** with Gemini Nano support.
- Enable experimental flags if needed: https://developer.chrome.com/docs/ai/built-in
- Chrome must be signed in with a Google account and have on-device AI enabled.
- The app must run directly in the browser (not server-side) when invoking built-in AI features.

### Minimum system requirements (from [developer.chrome.com](https://developer.chrome.com/docs/ai/prompt-api))
- **Operating system:** Windows 10/11, macOS 13 (Ventura) or later, Linux, or ChromeOS (Chromebook Plus).
- **Free storage:** At least **22 GB** of available space on the same drive as your Chrome profile.
- **Memory / GPU:**
  - GPU: ≥ 4 GB VRAM  
  - CPU-only: ≥ 16 GB RAM and ≥ 4 cores
- **Network:** Stable and preferably unmetered internet connection for initial model downloads.
- **Device type:** Desktop/laptop (mobile browsers not currently supported).
- **Model persistence:** If disk space drops below ~10 GB, Chrome may delete the Gemini Nano model and re-download it later.

---

## Usage Instructions  
- Test using the vercel deployment on a **laptop/desktop system**

---

## What's next for gudox
Since I focused on the version control features and the integration of google chrome built-in ai for this, the next step is to add more features in the document writing part such as more formatting options and realtime collaboration. 
