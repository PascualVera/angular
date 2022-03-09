export class Usuario {
  public id_usuario: number
  constructor(
    public nombre: string,
    public apellidos: string,
    public correo: string,
    public foto: string,
    public password: string
  ) {}
  getFullName(): string {
    return this.nombre + ' ' + this.apellidos;
  }
}
