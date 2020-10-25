const { runCmd } = require("../util/runCmd")

const recycle = async () => {
    await runCmd("npm update", console)
    await runCmd("blux-gen build", console)
    await runCmd("node server", console)
}

recycle()