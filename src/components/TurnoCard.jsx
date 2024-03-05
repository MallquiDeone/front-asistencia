function TurnoCard({turno}) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className="text-2xl font-bold">{turno.tipo_turno}</h1>
      <p className="text-slate-100">{turno.hora_limite_entrada}</p>
    </div>
  );
}

export default TurnoCard;
