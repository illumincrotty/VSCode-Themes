# VS Code Extension guide

## Launch

- Press `F5` to open a new window with your extension loaded.
- Open `File > Preferences > Color Themes` and pick your color theme.
- Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) .

## Adopt your theme to Visual Studio Code

- The token colorization is done based on standard TextMate themes. Colors are matched against one or more scopes.

More on scopes and theming in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

## Install before publishing

- Copy vsix it into the `<user home>/.vscode/extensions` folder and restart Code.
- go to <https://code.visualstudio.com/docs> to see more on publishing an extension.

## links

- [publishing walkthrough](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions)
- [extension manifest](https://code.visualstudio.com/api/references/extension-manifest)
- [Advanced?](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishers-and-personal-access-tokens)
- [vscode marketplace manage](https://marketplace.visualstudio.com/manage)
- [vscode azure dev ops publishing](https://dev.azure.com)
- [color theme documentation](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme)
- [reference for themable stuff](https://code.visualstudio.com/api/references/theme-color)
- [eclipse registry guide](https://www.eclipse.org/community/eclipse_newsletter/2020/march/1.php)
- [eclipse open vsx repository](https://github.com/eclipse/openvsx)
