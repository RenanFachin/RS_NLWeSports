// 1080 -> 18:00 

export function convertMinutesToHourString(minutesAmount: number){
    // sempre arredondando para baixo o número de horas
    // EX: 1100/60 = 18,33 -> Será colocado na const hours o valor de 18
    const hours = Math.floor(minutesAmount/60);

    // Pegando o resto da divisão
    const minutes = minutesAmount % 60;

    // {String(hours).padStart(2, '0')} => adiciona um zero na frente de horas caso horas não tenha 2 caracteres
    // {String(minutes).padStart(2,'0') => adiciona um zero na frente de minutos caso horas não tenha 2 caracteres
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}`;
}