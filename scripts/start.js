const resolve = require("path").resolve;
const cp = require("child_process");
const os = require("os");

const npmCmd = os.platform().startsWith("win") ? "npm.cmd" : "npm";
const dotnetCmd = "dotnet";

const clientPath = resolve(__dirname, "..", "client");
const serverPath = resolve(__dirname, "..", "server");

// start client
cp.spawn(npmCmd, ["start"], { cwd: clientPath, stdio: "inherit" });
// start server
cp.spawn(dotnetCmd, ["run", "--watch"], { cwd: serverPath, stdio: "inherit" });
