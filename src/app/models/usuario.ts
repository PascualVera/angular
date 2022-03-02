export class Usuario {
  constructor(
    public id_usuario: number,
    public nombre: string,
    public apellidos: string,
    public correo: string,
    public url: string,
    public password: string
  ) {}
  getFullName(): string {
    return this.nombre + ' ' + this.apellidos;
  }
}
