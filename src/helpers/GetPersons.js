const endDate = new Date(2022, 0, 1);
const startDate = new Date();

const randomDate = (startDate) => {
  const date = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return date;
};

const GetPersons = () => {
  // https://randomuser.me/api/
  // https://thatcan.be/my/next/tweet/#
  return [
    {
      name: "Tina Arneberg",
      department: 'Accountancy, banking and finance',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Wilhelmus Hammer",
      department: 'Creative arts and design',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Gloria Chevalier",
      department: 'Energy and utilities',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Antoine Perrin",
      department: 'Engineering and manufacturing',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Eren Akşit",
      department: 'Environment and agriculture',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Anna Crespo",
      department: 'Healthcare',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Oswald Knebel",
      department: 'Hospitality and events management',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Emil Elo",
      department: 'Information technology',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Layla Perez",
      department: 'Law',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
    {
      name: "Bruce Knight",
      department: 'Leisure, sport and tourism',
      created_at: randomDate(new Date()),
      updated_at: randomDate(new Date())
    },
  ];
};

export { GetPersons };
