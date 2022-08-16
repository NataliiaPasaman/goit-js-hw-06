const countQuantityElementsCategoryWithTitleAndLength = () => {

    const numberCategories = document.querySelectorAll('.item');
    console.log('Number of categories: ' ,numberCategories.length);

    for (const elem of numberCategories) {

        const textTitleElement = elem.firstElementChild.textContent;
        console.log('Category: ', textTitleElement);
    
        const numberLiItems = elem.children[1].children;
        console.log('Elements: ', numberLiItems.length);
    }

};

countQuantityElementsCategoryWithTitleAndLength();