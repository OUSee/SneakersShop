import { SelectSlider } from "./selectSliderComponent";
import styles from "./styles.module.css";

export const SelectSection = () => {
    return (
        <div className={styles.container}>
            <div id="select">
                <SelectSlider />
            </div>
        </div>
    );
};
