const timeSet = () => {
  const availableTime = [];
  for (let index = 9; index < 18; index++) {
    availableTime.push(index + ' : 00');
    availableTime.push(index + ' : 30');
  }
  return availableTime;
};

export default timeSet;
