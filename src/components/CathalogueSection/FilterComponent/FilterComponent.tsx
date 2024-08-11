import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Slider } from './Slider';
import { Filter } from '../../../types';
import { filter } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { ProductsSlice } from '../../../redux/slices/productsSlice';
// import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';


    
export const FilterComponent = () => {

    const [prices, setPrice] = useState({ min: 0,  max: 26000});
    const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];
    const dispatch = useDispatch()
    const productsState = useSelector((state: RootState) => state.products.data)


    //create filter object

    const createFilterInstance = (filter : Filter) => {
        dispatch(ProductsSlice.actions.filterData(filter))
    }
    
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
        createFilterInstance(newFilter)
        console.log(data)
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


    useEffect(() => {
        
    },[prices])
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
            <button type='reset' className={styles.setFilterToDefault}>сбросить</button>
        </form>
    )
}