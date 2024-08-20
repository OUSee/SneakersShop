import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { CrewCard } from "./CrewCard";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getTeamMembers } from "../../redux/slices/teamSlice";

export const CrewSection = () => {
    const state = useSelector((state: RootState) => state.teamMembers.data);
    const dispatch = useDispatch<AppDispatch>();

    const getTeamData = async () => {
        dispatch(getTeamMembers());
    };

    useEffect(() => {
        getTeamData();
    }, []);

    return (
        <div className={styles.container}>
            <div id="crew" className="content">
                <h2 className={styles.crewTitle}>Наша команда</h2>
                <ul className={styles.crewTable}>
                    {state.map((teamMember) => {
                        return (
                            <CrewCard
                                key={teamMember.id}
                                teamMember={teamMember}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
