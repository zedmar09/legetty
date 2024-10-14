export const getImageUrl = (name = '') => {
  const firstName = name?.split(' ')[0] || 'C';
  const lastName = name?.split(' ')[1] || 'C';
  return `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=74CF6C&color=ffffff`;
};

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export const getSplicedArray = (arr: any[], indicesToRemove: number[]) => {
  const finalArray = [...arr];
  const finalIndices = [...indicesToRemove];
  finalIndices.sort((a, b) => b - a);
  for (let i = 0; i < finalIndices.length; i++) {
    let index = finalIndices[i];
    finalArray.splice(index, 1);
  }
  return finalArray;
};

export const getYesNoValue = (property: boolean) => {
  if (property === null || property === undefined) return null;
  return property === true ? 'Yes' : 'No';
};

export const formatNumber = (num: number, minimumFractionDigits = 0) => {
  return num.toLocaleString(undefined, { minimumFractionDigits: minimumFractionDigits || 0 });
};


export const getTuitionFee =(famState:string, collState:string, overAllFee:number, instateFee:number, outStateFee:number)=>{
    const familyState = famState?.toLowerCase()?.trim();
    const collegeState = collState?.toLocaleLowerCase()?.trim();
    if(familyState == collegeState){
      if(instateFee){
        return instateFee;
      }
    }
    else{
      if(outStateFee){
        return outStateFee;
      }
    }
    return overAllFee;
}