# Privacy & AI: Using Claude Code in 60-212

You'll be provided with a public version of a coding LLM (Claude Code) in order to help you make creativity tools, generative artworks, and browser-based applications. You should experiment freely with ideas and code, but you'll need to be deliberate about what information you let this AI system see.

**The basic rule:** If information is private, sensitive, confidential, or belongs to someone else, don't give it to a public AI tool unless you have explicit permission and an appropriate reason to do so.

*This document has the following sections:*

1. *What not to share*
2. *Claude Code can see more than what you type*
3. *Use the minimum data necessary*
4. *Public accounts are not the same as university-protected services*
5. *A practical default for this course*

---

## 1. What not to share

**Do not** enter, upload, or otherwise expose the following information to Claude Code or other public AI tools:

- **Passwords and credentials:** passwords, API keys, access tokens, private encryption keys, recovery codes, and login credentials.
- **Government and financial identifiers:** Social Security numbers, government ID numbers, bank or credit-card details, and financial records.
- **Health and other sensitive personal information:** medical histories, diagnoses, health records, and similarly private information about yourself or anyone else. Don't use the LLM as a diary or therapist.
- **Private information about other people:** personal contact details, private messages, student IDs, grades, or other educational records.
- **Confidential or restricted material:** unpublished research, proprietary code or datasets, confidential workplace documents, and files you do not have permission to share.

Removing a person's name is not necessarily enough to anonymize information; combinations of other details may still identify them.


---

## 2. Claude Code can see more than what you type

Unlike a chatbot that only receives text you paste, a coding agent may be able to **read project files, inspect directories, run terminal commands, modify files, and use connected tools**, depending on its configuration and the permissions you grant.

For this class:

- **Work in a dedicated project folder.** Do not give the agent access to your home directory, cloud-drive folders, or unrelated personal projects.
- **Check what is in the folder before opening it with Claude Code.** Watch for `.env` files, credentials, downloaded personal records, private images, and other sensitive material. A `.gitignore` file does not prevent an AI agent from reading a file.
- **Review requests for broader access.** Do not automatically approve commands, file access, or connections you don't understand. Be especially wary about letting Claude make any system-wide installs.
- **Inspect code before running or publishing it.** AI-generated code can accidentally expose credentials, transmit data to outside services, or introduce unsafe dependencies.
- **Be careful what you commit to GitHub or publish online.** A private file accidentally committed to a public repository may remain accessible in its history even after you delete it.


---

## 3. Use the minimum data necessary

Most creativity tools and generative art projects do not require real personal information. Use invented names, placeholder images, synthetic datasets, and sample text whenever possible.

For example, if you're making a tool that visualizes messages, use fictional messages rather than exporting a private chat. If you're making a webcam-based artwork, consider whether it can process the image locally instead of uploading frames to an external service. If you're debugging a problem, share the relevant code or error message rather than an entire folder of unrelated files.

**Before sharing a file or granting access, ask:** 

* Do I need this information for the task? 
* Is it mine to share? 
* Could I replace it with a fictional example or a smaller excerpt?


---

## 4. Public accounts are not the same as university-protected services

The Claude Code access provided for this class should be treated as a **public, non-university-licensed AI service**, not as a CMU-protected environment. Using your Andrew email address does not, by itself, give the account CMU's contractual privacy safeguards.

Do not enter sensitive, personally identifiable, protected educational records into an unlicensed tool. Information you submit may be processed, retained, or reviewed according to the provider's terms, settings, and policies. Do not assume that deleting a chat or file actually erases every copy.


---

## 5. A practical default for this course

**Use AI for code, algorithms, debugging, interface ideas, and creative experimentation—not as a repository for your private life or other people's information.** Keep your working folder clean, use synthetic content, and inspect what the agent can access and what your project sends over the network.

If you're unsure whether something is appropriate to share, leave it out and ask the professor before proceeding.
