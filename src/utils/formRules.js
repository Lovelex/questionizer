export function required(v) {
  return Boolean(v) && Boolean(v.trim()) || "Campo obrigatório.";
}
