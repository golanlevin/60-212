* **Download** Google Antigravity from [here](https://antigravity.google/download)
* **Install** the Antigravity CLI: 
  - macOS: `curl -fsSL https://antigravity.google/cli/install.sh | bash`
  - WinCMD: `curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd`
* Run `agy` to start the CLI: 
* `agy --version`
* `agy`
* Yes I trust this folder. Yes allow creation of this file. 

<!--

```
npm install -g @google/gemini-cli --allow-scripts=@github/keytar,node-pty 
gemini --version
gemini
```
Gemini Code Assist and Gemini CLI 

How would you like to authenticate for this project?

1. Sign in with Google
2. Use Gemini API Key


Getting Your Gemini API Key
Go to the Google Cloud Resource Manager.
https://console.cloud.google.com/cloud-resource-manager?walkthrough_id=resource-manager--create-project&start_index=1#step_index=1

-->

---

<!--
(***60 minutes***) The purpose of this task is to guide you through the installation of key tools we'll need to develop software.

### 1.4.1. Installing, Extending, and Using VSCode

* **Install** the [Visual Studio Code](https://code.visualstudio.com/download) development environment for your computer, if you have not already done so. If you are also asked to install the (Apple) "command line developer tools", do so (this may take a few minutes).
* **Install** Sam Lavigne's [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) extension for Visual Studio Code. This extension helps VSCode understand p5.js specifically; it includes autocompletion, and can launch live servers for you. Click the green *Install* button; allow it to open VSCode; and click through the blue *Install* buttons within VSCode. 
* **Create** a directory for this course on your computer, such as `CreativeCoding` or `60-212`, if you haven't already done so.
* **Download** this zip: [simple-p5v2-project.zip](resources/simple-p5v2-project.zip), and unzip it inside your `CreativeCoding` directory. 
* In VSCode, **make** a `File->New Window`, and **drag** the unzipped `simple-p5v2-project` folder into it. **Permit** VSCode to access the folder if necessary — especially if you see a message that you are in "Restricted Mode". An option to "Go Live" should now appear in the lower right of the VSCode window. **Click** "Go Live": this will launch a local server and **run** the p5.js program in your default browser. <br/>![go-live-button.png](img/go-live-button.png)
* **Modify** the `sketch.js` program so that it draws squares instead of circles. (This requires a change to just one line of code.) **Save** the updated program in VSCode; the browser should restart the program with your change. 
* **Screenshot** your modified program by pressing the `S` key inside the running sketch window, and **upload** your screenshot to the `#01-vscode` channel in Discord.<br />![vscode-test.png](img/vscode-test.png)

### 1.4.2. Installing and Testing Your CLI Coding Agent

***Note: ZERO ART is required or requested for this task.***

This semester (indeed, this week) we will make use of LLM-based coding agents such as OpenAI *Codex* or *ChatGPT*, Anthropic *Claude*, or Google's *Gemini* and *Antigravity*. The purpose of this task is to make sure that you have one of these tools installed — ideally as a **CLI**, or command-line interface — and that you are able to successfully demonstrate its use.

I am aware that Codex and Claude cost money. Fortunately, as a CMU student, you have "free" access to Google's Gemini LLM through your university Google account. *(To the best of my knowledge, you're given $300 in credits.)* Furthermore, "Google will not retain your prompts or responses to train its AI models." The Google Gemini Web App can be accessed in your browser through these links:

* [https://www.cmu.edu/computing/services/ai/tools/google-ai-tools/](https://www.cmu.edu/computing/services/ai/tools/google-ai-tools/)
* [https://gemini.google.com/](https://gemini.google.com/)
* [https://aistudio.google.com/apps](https://aistudio.google.com/apps)

When using a coding agent, I would *prefer* that you use a CLI-based coding agent, rather than constantly copy-pasting small edits between chats and IDE. Therefore, I ask you to try to install a CLI coding agent such as *Codex*, *Claude*, or *Antigravity*. You should have 
 
* **Download** Google Antigravity from [here](https://antigravity.google/download)
* **Install** the Antigravity CLI: 
  - macOS: `curl -fsSL https://antigravity.google/cli/install.sh | bash`
  - Windows CMD: `curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd`

> In this directory is a stub for a simple p5.js project. Remove the random squares. Instead, use p5.js to make a simple face generator. Have the program generate a new face each time the user presses the space bar.

<img src="img/random-face.png" width=480>

FWIW, if you'd like to see a nice example of generative faces in JavaScript, the artist Mannay [released this project](img/mannay_generated_faces.jpg) last week ([link](https://x.com/mannay/status/2087522034351796728)). 
-->