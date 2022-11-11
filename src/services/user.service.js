
// like get fetch data on DB
import usersData from '../data/mock-user-data.json';

const getData = (filterItem) => {

    if (filterItem?.length > 2) {
       return usersData.filter(f => f.name.toLowerCase().includes(filterItem.toLowerCase()) || f.policyNo.includes(filterItem));
    }
  return usersData;
}

export default getData
