'use strict';

import * as vscode from "vscode";
import child_process = require("child_process");

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(vscode.commands.registerCommand("extension.opengitup", () => {
    var commandLineTool = "/Applications/GitUp.app/Contents/SharedSupport/gitup";
    var project = vscode.workspace.rootPath;
    if (project) {
      child_process.exec(commandLineTool);
    }
  }));
}
