const endDate = new Date(2022, 0, 1);
const startDate = new Date();

const randomDate = (startDate) => {
  const date = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return date;
};

const getContactsList = () => {
  // https://randomuser.me/api/
  // https://thatcan.be/my/next/tweet/#
  return [
    {
      name: "Tina Arneberg",
      message: {
        body: "I've donated the request, but got one on HEN, and found a few bigger variants of the kind words! : Hash!",
        time: randomDate(startDate),
      },
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      status: true,
    },
    {
      name: "Wilhelmus Hammer",
      message: {
        body: "I could draw pixels in my lucky - Thank you very much, means a few bigger variants of attention. The.",
        time: randomDate(startDate),
      },
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      status: false,
    },
    {
      name: "Gloria Chevalier",
      message: {
        body: "Went to Fire Card just got a Flash went to code and collect beautiful art instead : 🐙🫧🪸 monokai.tez.",
        time: startDate,
      },
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: true,
    },
    {
      name: "Antoine Perrin",
      message: {
        body: "Thanks all leftovers on purely created No moon, no problem. Look at 17:00 UTC+2 ✨ …and is the beta. This.",
        time: randomDate(startDate),
      },
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      status: false,
    },
    {
      name: "Eren Akşit",
      message: {
        body: "Fxhash represented by is actually not a good idea. Sometimes its just minted 6 Drifters. I just got one!",
        time: randomDate(startDate),
      },
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
      status: true,
    },
  ];
};

export { getContactsList };
