export const BuilderError = ({ datail }) => {
  if (!datail.length)
    return {
      succes: false,
      error: [
        {
          field: datail.path[0],
          expected: datail.expected,
          received: datail.received,
        },
      ],
    };

  return {
    succes: false,
    error: datail.map((e) => {
      return {
        field: e.path[0],
        expected: e.expected,
        received: e.received,
      };
    }),
  };
};
