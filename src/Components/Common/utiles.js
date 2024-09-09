import rock from "../../images/icon-rock.svg"
import scissors from "../../images/icon-scissors.svg"
import spock from "../../images/icon-spock.svg"
import lizard from "../../images/icon-lizard.svg"
import paper from "../../images/icon-paper.svg"

export const pieces = [
    { url: rock, color: "#ed143d", piece: 1 },
    { url: scissors, color: "#ffa500", piece: 2 },
    { url: lizard, color: "#cb26cb", piece: 3 },
    { url: spock, color: "#87cefa", piece: 4 },
    { url: paper, color: "#6495ed", piece: 5 },
]

export const game_result = [
//   R      Pa     S     L     Sp
    [false, false, true, true, false], // rock
    [true, false, false, false, true],  // paper
    [false, true, false, true, false], // scissors
    [false, true, false, false, true],  // lizard
    [true, false, true, false, false], // spock
]

export function hexToRgb(hex) {
    // Remove the leading # if it's there
    hex = hex.replace(/^#/, '')

    // Parse r, g, b values
    let bigint = parseInt(hex, 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255

    return `${r}, ${g}, ${b}`
}
