const AddToLS = (breakTime) => {
  localStorage.setItem("break-time", breakTime);
};

const GetBreakTimeFromLS = () => {
  let breakTime = 0;
  const prevBreakTime = localStorage.getItem("break-time");
  if (prevBreakTime) {
    breakTime = prevBreakTime;
  }
  return breakTime;
};

export { AddToLS, GetBreakTimeFromLS };
