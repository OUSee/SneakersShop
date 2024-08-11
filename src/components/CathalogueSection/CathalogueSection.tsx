import { useEffect, useState } from 'react'
import { ProductCard } from './CardComponent/ProductCard'
import { CardPopup } from './CardPopup/CardPopup'
import { FilterComponent } from './FilterComponent/FilterComponent'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, store } from '../../redux/store'
import { getProducts } from '../../redux/slices/productsSlice'
import { Sneaker } from '../../types'
    
export const CathalogueSection = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupSneaker, setPopupSneaker] = useState<Sneaker>();
    const [viewMore, setViewMore] = useState(false);
    const state = useSelector((state: RootState)=> state.products.data)
    const dispatch = useDispatch<AppDispatch>();
    const defaultView = 6;

    const showAll = () => {
        setViewMore(true)
    }

    const handleClosePopup = () => {    
        setPopupVisible(false)
    }

    const openPopup = (sneaker: Sneaker) => {
        setPopupSneaker(sneaker)
        setPopupVisible(true)
    }

    const getSneakersData = async () => {
        dispatch(getProducts());
    }

    useEffect(() => {
        getSneakersData()
    }, [])

    return ( 
        <div id='cathalogue'className={styles.cathalogueContainer} >
            <div className='content'>
                <h2 className={styles.sectionTitle}>Каталог</h2>
                <div className={styles.menuGroup}>
                    <div className={styles.filterContainer}>
                        <FilterComponent />
                    </div>
                    <div className={styles.cardsCollectionContainer}>
                        <ul className={styles.cardsList}>
                            {
                                state.slice(0, viewMore ? state.length : defaultView).map((sneaker)=>{return <ProductCard key={sneaker.id} sneaker={sneaker} openPopup={()=>{openPopup(sneaker)}}></ProductCard>})
                            }
                        </ul>
                        {!viewMore && <button onClick={showAll} className={styles.wiewMoreBTN}>Показать еще</button>} 
                        
                    </div>
                </div>
            </div>
            {popupVisible && popupSneaker && <CardPopup sneaker={popupSneaker} onClose={handleClosePopup}/> }
        </div>
    )
}