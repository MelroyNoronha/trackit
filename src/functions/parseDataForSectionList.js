export default trackItData => {
  let parsedData = [];

  const allDates = trackItData.map(record =>
    new Date(record.date).toDateString(),
  );
  const allUniqueDates = allDates.filter(
    (date, index, self) => self.indexOf(date) === index,
  );
  const allUniqueDatesDescending = allUniqueDates.sort((a, b) => {
    return new Date(b) - new Date(a);
  });

  allUniqueDatesDescending.forEach(date => {
    const recordsWithSameDate = trackItData.filter(
      record =>
        new Date(record.date).toDateString() === new Date(date).toDateString(),
    );

    parsedData.push({
      title: new Date(date).toDateString(),
      data: recordsWithSameDate,
    });
  });

  return parsedData;
};
