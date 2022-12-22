import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    console.log("Spass Extension running");
    let disposable = vscode.commands.registerCommand('spass.run', (fileUri: vscode.Uri) => {
        run();
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log("Spass Extension stopped");
}

    /**
     * funzione associata al comando spass.run
     */
function run(){
    if(vscode.env.appHost!=='desktop'){
        vscode.window.showWarningMessage("This command is not supported in VS Code Web");
        return;
    }
    let activeTextEditor = vscode.window.activeTextEditor;
    let activeTerminal = vscode.window.activeTerminal;
    let currentPath = activeTextEditor?.document.uri.path.split("/"); // divide il path in un array

    if(currentPath){ // se un file è aperto, esegue i comandi
        let currentFile = currentPath[currentPath.length-1]; // l'ultimo elemento è il nome del file
        currentPath.splice(0,1);
        if(!activeTerminal){ // se non ci sono terminali aperti, crea un nuovo terminale con il nome del file
            activeTerminal = vscode.window.createTerminal(currentFile);
        }
        activeTerminal.show(false); // mostra il terminale
        activeTerminal?.sendText(`spass '${currentPath.join("/")}'`); // esegue l'interprete di spass
    }
    else{
        vscode.window.showErrorMessage("Spass Error: there's no active file to run");
    }
}