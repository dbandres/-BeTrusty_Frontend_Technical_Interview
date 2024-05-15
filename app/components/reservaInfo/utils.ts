
export const calcularCantidadDias = (diaEntrada: number, mesEntrada: number, diaSalida: number, mesSalida: number) => {
  const fechaEntrada = new Date(2024, mesEntrada - 1, diaEntrada);
  const fechaSalida = new Date(2024, mesSalida - 1, diaSalida);

  const diferenciaMilisegundos = fechaSalida.getTime() - fechaEntrada.getTime();

  const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

  return dias;
}

export const setFormatoFecha = (value:any) => {
  let dia; let mes; let año = value.year; let fecha;

  value.day < 10 ? dia = "0" + value.day : dia = value.day
  value.month < 10 ? mes = "0" + value.month : mes = value.month

  fecha = `${dia}/${mes}/${año}`
  return fecha
}
