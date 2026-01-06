// Auto import projects

const modules = import.meta.glob("./*.js", { eager: true });

export const projects = Object.values(modules).map((mod) => mod.default);
