export function generateMegasenaList(max = 6) {
    const megasenaList = []

    if (max < 6 || max > 60) {
        throw 'Opção inválida'
    }

    for (let i = 0; i < max; i++) {
        let number = Math.floor((Math.random() * 60) + 1)
        if (megasenaList.includes(number)) {
            i = i - 1
            continue
        }

        megasenaList.push(number)
    }

    return megasenaList.sort((a, b) => a - b)
}
