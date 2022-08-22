const findElementsUl = () => {

    const numberCategories = document.querySelectorAll('.item');
    console.log('Number of categories: ' ,numberCategories.length);

    numberCategories.forEach(elem => {
        const titleElement = elem.firstElementChild.textContent;
        const numberItems = elem.children[1].children;

        console.log('Category: ', titleElement);
        console.log('Elements: ', numberItems.length);
    })
};

findElementsUl();