export class Libro {
  public id_libro: number;
  public id_usuario: number;

  constructor(
    public titulo: string,
    public tipoLibro: string,
    public autor: string,
    public precio: number,
    public photo: string,
    public sinopsis: string
  ) {
    this.id_libro = 0;
    this.id_usuario = 0;
  }
}
