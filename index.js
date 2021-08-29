const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
  superbowlWin = (record) => {
      let result = record.find(record => record.result === 'W');
      return result ? result.year : undefined; 
  }