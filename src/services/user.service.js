
// like get fetch data on DB
import { data } from '../data/MockData';

const getData = (filterItem) => {

    if (filterItem?.length > 2) {
       return data.filter(f => f.name.toLowerCase().includes(filterItem.toLowerCase()) || f.policyNo.includes(filterItem));
    }
  return data;
}

export default getData
