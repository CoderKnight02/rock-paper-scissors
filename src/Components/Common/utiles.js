import rock from "../../images/icon-rock.svg"
import scissors from "../../images/icon-scissors.svg"
import spock from "../../images/icon-spock.svg"
import lizard from "../../images/icon-lizard.svg"
import paper from "../../images/icon-paper.svg"

export const pieces = [
    { url: rock, color: "#ed143d", piece: 1 },
    { url: paper, color: "#6495ed", piece: 2 },
    { url: scissors, color: "#ffa500", piece: 3 },
    { url: lizard, color: "#cb26cb", piece: 4 },
    { url: spock, color: "#87cefa", piece: 5 },
]

export const game_result = [
    //   R      Pa     S     L     Sp
    [false, false, true, true, false],  // Rock (Rock loses to Paper and Spock, wins against Scissors and Lizard)
    [true, false, false, false, true],  // Paper (Paper wins against Rock and Spock, loses to Scissors and Lizard)
    [false, true, false, true, false],  // Scissors (Scissors loses to Rock and Spock, wins against Paper and Lizard)
    [false, true, false, false, true],  // Lizard (Lizard loses to Rock and Scissors, wins against Paper and Spock)
    [true, false, true, false, false],  // Spock (Spock wins against Rock and Scissors, loses to Paper and Lizard)
];

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
