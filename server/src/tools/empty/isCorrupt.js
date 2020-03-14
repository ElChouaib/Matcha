const isCorrupt = (inpt) => {
    if(!inpt) return true
    if (typeof inpt === "undefined" || typeof inpt !== "string") return true
    if(inpt.length === 0) return true
    if(JSON.stringify(inpt) === '{}') return true
    return false
}

module.exports = isCorrupt;