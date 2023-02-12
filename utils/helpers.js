module.exports = {
    filterByTechCategory: (array, category) => {
        return array.filter((item) => item.category === category);
    },
};