# Figma AutoNamer 🚀  

**AI-powered Figma plugin that automatically renames layers for better design organization.**  

## 🎨 Inspiration  
Designers and developers often deal with **messy, unorganized layer structures** in Figma, making collaboration harder.  
Renaming layers manually is **time-consuming and tedious**.  
**What if AI could automate this process?**  

That's where **Figma AutoNamer** comes in!  

## 🔍 What it does  
- Extracts **layers and images** from a selected Figma frame.  
- Uses **AI to analyze images** and generate descriptions.  
- Sends the extracted data to AI, which **suggests proper layer names**.  
- **Automatically renames layers** in Figma, improving design structure.  

## 🛠️ Built With  
- **Frontend:** Figma Plugin API, TypeScript  
- **Backend:** Deno Deploy (Serverless API)  
- **AI Models:**  
  - **Llama-3.2-90B-Vision-Instruct** (Extracts image context)  
  - **Mistral-small** (Generates meaningful layer names)  
- **GitHub Marketplace AI** (Used instead of Azure AI)  

## 🚀 How to Install  
1. Open **Figma** and go to **Plugins**.  
2. Search for **Figma AutoNamer**.  
3. Click **Install** and launch the plugin.  

## ⚡ How to Use  
1. **Select a frame** with layers and images.  
2. Click **"Analyze & Rename"** in the plugin.  
3. AI will process the layers and rename them automatically! 🎉  

## 🔥 Challenges We Solved  
- **Azure AI Credit Limitations:** Used GitHub Marketplace AI as an alternative.  
- **AI Accuracy:** Optimized prompt engineering for better naming.  
- **Figma API Constraints:** Ensured smooth layer updates without breaking structures.  
- **Deno Deployment Adjustments:** Adapted API calls to **Deno Deploy**.  

## 🎯 What's Next?  
- **Bulk renaming support** for multiple frames.  
- **Custom naming styles** based on user preferences.  
- **Auto-grouping layers** based on AI-detected similarities.  
- **Export AI-enhanced layer structures** for better integration.  

## 📜 License  
This project is licensed under the **MIT License**.  

## 💡 Contributing  
Pull requests are welcome! Open an issue for any bug reports or feature requests.  

## 👤 Author  
**Jackson Kasi**  
GitHub: [jacksonkasi0](https://github.com/jacksonkasi0)  