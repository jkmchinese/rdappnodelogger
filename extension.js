// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const os = require('os');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rdappnodelogger" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld',
		async () => {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			// vscode.window.showInformationMessage(`${new Date().toLocaleTimeString()}`);

			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}

			const selectedText = editor.document.getText(editor.selection);
			if (selectedText.trim().length === 0) {
				return;
			}

			await editor.edit(editBuilder => {
				const level = 'info';
				const logMsg = `logger.${level}(\`\${trace()}:%o\`, ${selectedText});`;

				let nextLine = editor.selection.active.line + 1;
				let whiteSpace = "";

				const currentLine = editor.document.lineAt(editor.selection.active.line);
				console.log('rd: activate -> firstNonWhitespaceCharacterIndex:', currentLine.firstNonWhitespaceCharacterIndex);
				for (let index = 0; index < currentLine.firstNonWhitespaceCharacterIndex; index++) {
					whiteSpace += " ";
				}


				if (nextLine >= editor.document.lineCount) {
					editBuilder.insert(
						new vscode.Position(nextLine, 0),
						`${os.EOL}${whiteSpace}${logMsg}`);
				}
				else {
					editBuilder.insert(
						new vscode.Position(nextLine, 0),
						`${whiteSpace}${logMsg}${os.EOL}`);
				}
			});
		});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
