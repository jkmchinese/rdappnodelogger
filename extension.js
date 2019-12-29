// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const os = require('os');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

async function logMsg(level) {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		return;
	}

	const selectedText = editor.document.getText(editor.selection);
	if (selectedText.trim().length === 0) {
		return;
	}

	await editor.edit(editBuilder => {
		const logMsg = `logger.${level}(\`\${trace()}:${selectedText}:%o\`, ${selectedText});`;

		let nextLine = editor.selection.active.line + 1;
		let whiteSpace = "";

		const currentLine = editor.document.lineAt(editor.selection.active.line);
		// console.log('rd: activate -> firstNonWhitespaceCharacterIndex:', currentLine.firstNonWhitespaceCharacterIndex);
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
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, "rdappnodelogger" is now active!');

	let errorLog = vscode.commands.registerCommand('extension.errorLog',
		async () => {
			await logMsg('error');
		});
	let warnLog = vscode.commands.registerCommand('extension.warnLog',
		async () => {
			await logMsg('warn');
		});
	let infoLog = vscode.commands.registerCommand('extension.infoLog',
		async () => {
			await logMsg('info');
		});
	let verboseLog = vscode.commands.registerCommand('extension.verboseLog',
		async () => {
			await logMsg('verbose');
		});
	let debugLog = vscode.commands.registerCommand('extension.debugLog',
		async () => {
			await logMsg('debug');
		});
	let sillyLog = vscode.commands.registerCommand('extension.sillyLog',
		async () => {
			await logMsg('silly');
		});


	context.subscriptions.push(errorLog);
	context.subscriptions.push(warnLog);
	context.subscriptions.push(infoLog);
	context.subscriptions.push(verboseLog);
	context.subscriptions.push(debugLog);
	context.subscriptions.push(sillyLog);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
