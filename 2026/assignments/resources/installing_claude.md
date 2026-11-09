## Install Claude Code

* Install the Claude Code app and connect your Andrew email to it. Instructions for doing so are [here](https://code.claude.com/docs/en/quickstart).
* In Terminal, launch Claude by typing: `claude`. If it asks whether you want to give it permission to work in the `claude-test` directory, say yes.
* Type `/status` to make sure you are signed in to the correct account. You should see `Login method: Claude Team account`, and `Organization: AI in CP at CMU`, and your email address.
*  If `/status` shows the wrong email or organization, run `/logout` and then `/login`. When `/login` asks how to sign in, you should pick the Claude account (subscription) option and sign in with your invited email.    
* Check to see whether you're drawing from the team plan, using `/usage`. If this shows plan limits, the connection to your team is working.

> **The most common trap: a leftover API key.** If you already have an `ANTHROPIC_API_KEY` environment variable on your computer, perhaps from an earlier class or project, Claude Code will use that key instead of your team seat once you approve it. That will bill your own API account. `/status` will show this as the login method. The fix is to remove the variable (unset ANTHROPIC_API_KEY, and delete it from their shell profile) and then restart Claude Code. If you have problems, check the instructions below.

---

## Removing an older Claude Code account

### macOS

1. Check whether the key is set: `echo $ANTHROPIC_API_KEY`. If this prints a blank line, the key isn't set and there's nothing to fix.
2. Remove it from the current window: `unset ANTHROPIC_API_KEY`
3. Find the file that sets it: `grep -n ANTHROPIC_API_KEY ~/.zshrc ~/.zprofile ~/.zshenv ~/.bash_profile ~/.bashrc ~/.profile 2>/dev/null`. This prints each matching file and line number. 
4. Delete that line. Open the file in a text editor, using whichever file name step 3 found: `open -e ~/.zshrc`. Delete the line that starts with `export ANTHROPIC_API_KEY=` and save. A safer alternative is to put a # at the start of the line, which turns it off without deleting it. 
5. Restart the Terminal. Close the Terminal window, open a new one, and run step 1 again. It should print a blank line. Then start Claude Code and run `/status`. The login method should show their Claude account.

### Windows (PowerShell)
```
  # Check
  echo $env:ANTHROPIC_API_KEY
  # Remove from the current window
  Remove-Item Env:ANTHROPIC_API_KEY
  # Remove permanently (user-level)
  [Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")
```
You can also remove it through the Start menu: open "Edit environment variables for your account", select `ANTHROPIC_API_KEY`, and click **Delete**. You should then reopen PowerShell.
