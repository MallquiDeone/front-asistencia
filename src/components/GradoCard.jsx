function GradoCard({grado}) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className="text-2xl font-bold">{grado.nombre_grado}</h1>
    </div>
  )
}

export default GradoCard