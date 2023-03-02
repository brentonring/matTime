export {}
// import axios from 'axios';
// import { WrestlerModel, Wrestler } from './wrestler';

// // Function to add a new wrestler to the database
// const addWrestler = async (firstName: string, lastName: string, team: string): Promise<Wrestler> => {
//   try {
//     const response = await axios.post<Wrestler>('/api/wrestlers', { firstName, lastName, team });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // Function to get all wrestlers from the database
// const getWrestlers = async (): Promise<Wrestler[]> => {
//   try {
//     const response = await axios.get<Wrestler[]>('/api/wrestlers');
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // Function to delete a wrestler from the database
// const deleteWrestler = async (id: string): Promise<boolean> => {
//   try {
//     const response = await axios.delete(`/api/wrestlers/${id}`);
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };
