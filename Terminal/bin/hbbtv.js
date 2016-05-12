var program = require("commander");
var package = require("../package.json");
program.version(package.version)
    .allowUnknownOption(false)
    .option("-m, --mode <mode>", "select mode. It is either 'terminal' to start as HbbTV Terminal or 'cs' to start as Companion Screen", /^(terminal|cs)$/i)
    .option("-p, --port <port>", "specify the port number of the HbbTV Terminal or CS Launcher. e.g. 8080",parseInt)
    .option("-i, --interdevsync-url <url>", "specify the URL of the inter-device synchronisation CSS-CII server. Applies to 'terminal' mode only. Optional.")
    .option("-u, --useragent <ua-string>", "specify the user agent string to be advertised. Applies to 'terminal' mode only. Optional.")

program.parse(process.argv);
var port = program.port>0 && program.port || null;
var mode = program.mode || null;
var interDevSyncUrl = program["interdevsyncUrl"] || null;
var userAgent = program["useragent"] || null;

if(port){
    global.PORT = port;
    if(mode == "terminal"){
        global.INTERDEVSYNC_URL = interDevSyncUrl;
        global.USERAGENT = userAgent;
        require("./start-terminal.js");
    }
    else if(mode == "cs"){
        require("./start-cs.js");
    }
    else {
        program.help();
    }
}
else{
    program.help();
}