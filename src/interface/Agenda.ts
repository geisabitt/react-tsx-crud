interface Agenda {
  id: number;
  name: string;
  email: string;
  cpf: string;
  date_born: string;
  numbers: {
    id: number;
    id_schedule: number;
    number: string;
  }[];
}
export default Agenda;
