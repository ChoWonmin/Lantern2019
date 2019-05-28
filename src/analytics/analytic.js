const analytic = {
  calcPearson: (list1, list2) => {
    let sumX = 0;
    let sumY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
    let sumXY = 0;
    let N = 0;

    list1.forEach(l1=>{
      list2.forEach((l2=>{
        if (l1.name===l2.name) {

          sumX += l1.count;
          sumY += l2.count;
          sumX2 += l1.count * l1.count;
          sumY2 += l2.count * l2.count;
          sumXY += l1.count * l2.count;
          N++;
        }
      }));
    });

    const denominator = sumXY - (sumX*sumY/N);
    const numerator = (sumX2 - sumX*sumX/N) * (sumY2 - sumY*sumY/N);

    return denominator*denominator / numerator;
  }
};

export default analytic;
