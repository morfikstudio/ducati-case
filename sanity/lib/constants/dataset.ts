export const FLOOR_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Non specificato" },
  { value: "basement-floor", label: "Interrato" },
  { value: "sub-basement-floor", label: "Seminterrato" },
  { value: "ground-floor", label: "Piano terra" },
  { value: "mezzanine-floor", label: "Ammezzato" },
  { value: "raised-floor", label: "Rialzato" },
  { value: "first-floor", label: "Primo" },
  { value: "second-floor", label: "Secondo" },
  { value: "third-floor", label: "Terzo" },
  { value: "fourth-floor", label: "Quarto" },
  { value: "fifth-floor", label: "Quinto" },
  { value: "sixth-floor", label: "Sesto" },
  { value: "multiple-floors", label: "Su più livelli" },
  { value: "attic", label: "Attico" },
  { value: "last-floor", label: "Ultimo piano" },
  { value: "full-building", label: "Intero stabile" },
  { value: "other", label: "Altro" },
]

export const CONCIERGE_SERVICE_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "full-time", label: "Intera giornata" },
  { value: "half-time", label: "Mezza giornata" },
]

export const HEATING_SYSTEM_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "centralized", label: "Centralizzato" },
  { value: "independent", label: "Autonomo" },
  { value: "other", label: "Altro" },
]

export const ENERGY_CLASS_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Non specificato" },
  { value: "a4", label: "A4" },
  { value: "a3", label: "A3" },
  { value: "a2", label: "A2" },
  { value: "a1", label: "A1" },
  { value: "b", label: "B" },
  { value: "c", label: "C" },
  { value: "d", label: "D" },
  { value: "e", label: "E" },
  { value: "f", label: "F" },
  { value: "g", label: "G" },
  { value: "other", label: "Altro" },
]

export const FURNISHING_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Non arredato" },
  { value: "furnished", label: "Arredato" },
  { value: "semi-furnished", label: "Semi arredato" },
  { value: "kitchen-only", label: "Solo cucina arredata" },
  { value: "other", label: "Altro" },
]

export const GARDEN_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "private", label: "Privato" },
  { value: "public", label: "Comune" },
  { value: "private-public", label: "Privato e Comune" },
]

export const GARAGE_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "single", label: "Singolo" },
  { value: "double", label: "Doppio" },
]

export const PARKING_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "covered", label: "Coperto" },
  { value: "uncovered", label: "Scoperto" },
]

export const POOL_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "private", label: "Si" },
  { value: "public", label: "Condominiale" },
]

export const TENNIS_COURT_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "private", label: "Si" },
  { value: "public", label: "Condominiale" },
]

export const AIR_CONDITIONING_OPTS: {
  value: string
  label: string
}[] = [
  { value: "", label: "Assente" },
  { value: "independent", label: "Autonomo" },
  { value: "centralized", label: "Centralizzato" },
  { value: "preparation", label: "Predisposizione impianto" },
]
