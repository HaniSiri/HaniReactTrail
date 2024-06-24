import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import rootCategory from '../data/categoryAssignment.json';
import allProductData from '../data/productData.json';
import { FaChevronLeft } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { GoDotFill } from "react-icons/go";
import "../styles/CategoryPage.css";
import ProductTile from '../components/ProductTile.tsx';

interface category {
    id: string,
    name: string,
    description?: string,
    products?: string[],
    subCategories?: category[]
}

const CategoryListingPage = () => {
    let { cid } = useParams<{ cid: string }>();
    let findCategory: (category: category, cgid: string, catPath: category[]) => boolean;
    findCategory = (category: category, cgid: string, catPath: category[]) => {
        if (category.id === cgid) {
            return true;
        }
        if (category.subCategories) {
            let foundSub = category.subCategories.find((sub) => {
                return findCategory(sub, cgid, catPath)
            });
            if (foundSub) {
                catPath.push(foundSub);
                return true;
            }
        }
        return false;
    }

    let path: category[] = [];
    cid && findCategory(rootCategory, cid, path);
    path.push(rootCategory);

    let cat: false | category = path[0];
    let childCat: false | category = false;
    let i = 0;
    while (i < path.length && !(cat.subCategories && cat.subCategories.length > 0)) {
        i++;
        childCat = cat;
        cat = path[i];
    }
    const getProducts: (selectecCat: category) => Set<string> = (selectecCat: category) => {
        var currentProducts = new Set<string>();
        selectecCat.products && selectecCat.products.forEach((p) => {
            currentProducts.add(p);
        });
        selectecCat.subCategories && selectecCat.subCategories.forEach((sub) => {
            let subCProducts = getProducts(sub);
            subCProducts.forEach((p) => {
                currentProducts.add(p);
            });
        })
        return currentProducts;
    }
    var pageCategory = cat;
    const [selectedTab, setselectedTab] = useState(childCat || pageCategory);
    useEffect(() => { setselectedTab(childCat || pageCategory) }, [childCat, pageCategory]);
    let productsArray = Array.from(getProducts(selectedTab));
    const [productsToDisplay, setproductsToDisplay] = useState(productsArray);
    useEffect(() => { setproductsToDisplay(productsArray) }, [productsArray]);
    console.log('productsToDisplay ', productsToDisplay);
    var sortOptions = new Set<string>();
    for (let index = 0; index < productsToDisplay.length; index++) {
        let pro = allProductData[productsToDisplay[index]];
        pro.tags.forEach(element => {
            sortOptions.add(element);
        });
    }
    console.log('sortOptions ', sortOptions);
    const sortBy = Array.from(sortOptions);
    console.log('sortBy ', sortBy);

    // HTML
    return (cat
        ? (<div className='clp-container'>
            <div className='breadcrumbs d-flex align-items-center text-sm'>
                <FaChevronLeft />
                <div className='px-2'>
                    {cat.name}
                </div>
                <div className='pl-2 border-start'>{selectedTab.id === cid ? 'All Products' : selectedTab.name}
                </div>
            </div>
            <div className='category-header d-flex align-items-center my-12 flex-column flex-xl-row'>
                <div className='fs-1 fw-bolder col-12 col-xl-4'>{cat.name}</div>
                <div className='description col-12 text-secondary col-xl-8'>{cat.description}</div>
            </div>
            <div className='category-navigation d-flex gx-5'>
                <div className={'col border-primary-color  p-3 mr-3 d-flex justify-content-between align-items-center ' + (pageCategory.id === selectedTab.id ? 'selected-tab' : 'other-tab')}
                    onClick={() => {
                        setselectedTab(pageCategory);
                        setproductsToDisplay(Array.from(getProducts(pageCategory)));
                    }}>
                    <div className=''>
                        {'All Products'}
                    </div>
                    {pageCategory.id === selectedTab.id && (<div className=''>
                        <GoDotFill className='h-2 w-2' />
                    </div>)}
                </div>
                {
                    pageCategory.subCategories?.map((sub) => {
                        return (<div className={'col border-primary-color p-3 mr-3  d-flex justify-content-between align-items-center ' + (selectedTab.id === sub.id ? 'selected-tab' : 'other-tab')}
                            onClick={() => {
                                setselectedTab(sub);
                                setproductsToDisplay(Array.from(getProducts(sub)));
                            }}>
                            <div className='tab-name'>
                                {sub.name}
                            </div>
                            {selectedTab.id === sub.id && (<div>
                                <GoDotFill className='h-2 w-2' />
                            </div>)}
                        </div>)
                    })
                }
            </div>
            <div className='filter-sort d-flex mt-12 mb-2 mb-md-6 justify-content-between flex-column flex-sm-row'>
                <div className='filter d-flex align-items-center rounded-pill p-2 border-1 border-primary-color fit-content mb-2 mb-sm-0'>
                    <VscSettings className='h-8 w-8 rounded-circle p-1 border-2 mr-3 border-primary-color' />
                    <div className='pr-6'>Filter</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='text-secondary mr-6 d-none d-md-flex'>
                        {productsToDisplay.length}&nbsp;Products
                    </div>
                    <div className='p-2 border-1 text-secondary border-secondary rounded-1 h-full w-full md:w-[232px] lg:w-[343px] sm:w-[230px]'>
                        <select className='sort-select h-full' name="sort" id="sort">
                            {sortBy.map((item) =>
                                <option key={item} value={item}>{item}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className='text-secondary mr-6 mb-2 d-md-none d-flex'>
                {productsToDisplay.length}&nbsp;Products
            </div>
            <div className='row gap-row-3 mb-4'>
                {
                    productsToDisplay.map((p) => {
                        return (
                            <div className='col-6 col-md-6 col-xl-4'>
                                <ProductTile pid={p} />
                            </div>
                        )
                    })
                }
            </div>
        </div>)
        : (<div>
            No Matching Category Found
        </div>
        ))
}

export default CategoryListingPage