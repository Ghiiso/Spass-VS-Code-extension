import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    console.log("Spass Extension running")
    let disposable = vscode.commands.registerCommand('spass.run', (fileUri: vscode.Uri) => {
        run(fileUri);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log("Spass Extension stopped")
}

function run(fileUri: vscode.Uri){
    /**
     * funzione associata al comando spass.run
     */
    let activeTextEditor = vscode.window.activeTextEditor;
    let activeTerminal = vscode.window.activeTerminal;
    let currentPath = activeTextEditor?.document.uri.path.split("/"); // divide il path in un array

    if(currentPath){
        let currentFile = currentPath[currentPath.length-1]; // l'ultimo elemento è il nome del file
        currentPath.pop(); // rimuove il nome del file dal path
        currentPath.splice(0,1);
        if(!activeTerminal){ // se non ci sono terminali aperti, crea un nuovo terminale con il nome del file
            activeTerminal = vscode.window.createTerminal(currentFile);
            
        }
        activeTerminal.show(false); // mostra il terminale
        activeTerminal?.sendText(`cd '${currentPath.join("/")}'`); // cambia la directory
        activeTerminal?.sendText(`spass ${currentFile}`); // esegue l'interprete di spass
    }
}