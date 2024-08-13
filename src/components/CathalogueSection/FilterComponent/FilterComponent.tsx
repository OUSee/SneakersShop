import { useState } from 'react';
import styles from './styles.module.css'
import { Slider } from './Slider';
import { Filter, Sneaker } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getProducts, ProductsSlice } from '../../../redux/slices/productsSlice';



    
export const FilterComponent = () => {

    const [prices, setPrice] = useState({ min: 0,  max: 26000});
    const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];
    const appDispatch = useDispatch<AppDispatch>()
    const dispatch = useDispatch()
    const productsState = useSelector((state: RootState) => state.products.data)

    const formFilter = (event: any) => {
         event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form);
        const newFilter: Filter = {
            start_price: Number(data.start_price),
            end_price: Number(data.end_price),
            men: data.men === 'on',
            women: data.women === 'on',
            sizes: {
                size35: data.size35 === 'on',
                size36: data.size36 === 'on',
                size37: data.size37 === 'on',
                size38: data.size38 === 'on',
                size39: data.size39 === 'on',
                size40: data.size40 === 'on',
                size41: data.size41 === 'on',
                size42: data.size42 === 'on',
                size43: data.size43 === 'on'
            }
        }

        const getSizes = (filter: Filter) => {
                let sizes: number[] = [];
                if (filter.sizes.size35) sizes.push(35);
                if (filter.sizes.size36) sizes.push(36);
                if (filter.sizes.size37) sizes.push(37);
                if (filter.sizes.size38) sizes.push(38);
                if (filter.sizes.size39) sizes.push(39);
                if (filter.sizes.size40) sizes.push(40);
                if (filter.sizes.size41) sizes.push(41);
                if (filter.sizes.size42) sizes.push(42);
                if (filter.sizes.size43) sizes.push(43);
                return sizes;
        };
        const priceFilteredProducts = productsState.filter((item: Sneaker) => {
            if (
                (newFilter.start_price < Number(item.price.replace(' ', ''))) && (newFilter.end_price > Number(item.price.replace(' ', '')))
            ) {
                return true
            }
            else return false
        })
        const genderFilteredProducts = priceFilteredProducts.filter((item: Sneaker) => {
            if ((newFilter.men && item.gender == "Мужской") || (newFilter.women && item.gender == 'Женский')) { 
                return true
            }
            else return false
        })
        const sizeFilteredProducts = genderFilteredProducts.filter((item: Sneaker) => {
            if (getSizes(newFilter).some(size => item.sizes.includes(size))) { return true }
            else return false
        })

        
        dispatch(ProductsSlice.actions.setData(sizeFilteredProducts))
    }

    const sliderChange = (val: number[]) => {
        setPrice({ ...prices, min: val[0], max: val[1]})
    }

    const handleMinPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice({ ...prices, min: (e.target as HTMLInputElement).valueAsNumber })
    }

    const handleMaxPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice({ ...prices, max: (e.target as HTMLInputElement).valueAsNumber })
    }

    const returnToDefault = () => {
        appDispatch(getProducts())
    }


    return ( 
        <form onSubmit={formFilter} className={styles.container}>
            <h2 className={styles.filterTitle}>Подбор по&nbsp;параметрам</h2>
            <h3 className={styles.priceTilte}>
                Цена, руб
            </h3>
            <div className={styles.pricesContainer}>
                <input id='startPrice' name='start_price' className={styles.controllDigits} type='number' value={prices.min} onChange={(e)=>{handleMinPriceInput(e)}}/>
                <input id='endPrice' name='end_price' className={styles.controllDigits} type="number" value={prices.max} onChange={(e)=>{handleMaxPriceInput(e)}}/>   
            </div>
            <Slider value={prices} onChange={sliderChange} />
            <h3 className={styles.sexCheckboxTitle}>
                Пол
            </h3>
            <fieldset className={styles.checkBoxesContainer}>
                <input name='men' type="checkbox" className='defaultCheckBox' id='genMen' />
                <label htmlFor="genMen" className={styles.label}>Мужской</label>
                <input name='women' type="checkbox" className='defaultCheckBox' id='genWomen' />
                <label htmlFor="genWomen" className={styles.label}>Женский</label>
            </fieldset>
            <h3 className={styles.SizesCheckboxTitle}>
                Размер
            </h3>
            <div className={styles.sizesContainer}>
                {sizes.map((size) => {
                    return (
                        <div key={`key${size}`} className={styles.checkBoxContainer}>
                            <input name={`size${size}`} type="checkbox" className={styles.sizeCheckbox} id={`size`+size} />
                            <label htmlFor={`size` + size} className={styles.sizeLabel}>{size}</label>
                        </div>
                    )
                })}
            </div>
            <button type='submit' className={styles.filterBTN}>Применить</button>
            <button type='reset' className={styles.setFilterToDefault} onClick={returnToDefault}>сбросить</button>
        </form>
    )
}