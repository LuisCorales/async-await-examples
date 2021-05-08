// Any type of data
const data = {
    id: 1,
    test: "test"
};

// const getData = () => {
//     return data;
// }

// console.log(getData());

const getDataFromApi = () => {
    setTimeout(() => {
        return data;
    }, 2000);
}

console.log(getDataFromApi());