// 18:00 -> 1080

// Primeiro passo: converte 18:00 para ["18", "00"]
// Segundo passado: O map, vai percorrer o array e transformar cada elemento em Number ["18", "00"] -> [18, 00]

export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes

    return minutesAmount
}