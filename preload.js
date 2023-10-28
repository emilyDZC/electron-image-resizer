const os = require("os");
const path = require("path");
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("os", {
  homedir: () => os.homedir(),
});

contextBridge.exposeInMainWorld("path", {
  join: (...args) => path.join(...args),
});

// contextBridge.exposeInMainWorld("versions", {
//   node: () => process.versions.node, // in the renderer we can now use 'versions.node' eg. console.log(versions.node) // 12.4.3
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   // we can also expose variables, not just functions
// });
