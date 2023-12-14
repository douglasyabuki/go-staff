export interface MockAPIResponse {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
}

export const mockApiResponse: MockAPIResponse[] = [
  {
    name: 'Alice',
    age: 28,
    gender: 'Female',
    height: 165,
    weight: 60,
  },
  {
    name: 'Bob',
    age: 32,
    gender: 'Male',
    height: 175,
    weight: 75,
  },
  {
    name: 'Charlie',
    age: 45,
    gender: 'Non-Binary',
    height: 170,
    weight: 68,
  },
  {
    name: 'Diana',
    age: 38,
    gender: 'Female',
    height: 160,
    weight: 55,
  },
  {
    name: 'Evan',
    age: 50,
    gender: 'Male',
    height: 180,
    weight: 80,
  },
];
