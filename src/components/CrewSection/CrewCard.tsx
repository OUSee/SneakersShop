import { TeamMember } from '../../types'
import styles from './styles.module.css'

interface ICrewCard{
    teamMember: TeamMember
}

export const CrewCard = ({teamMember}: ICrewCard) => {
    return ( 
        <li className={styles.CrewMemcontainer}>
            <div className={styles.CrewMemImageContainer}>
                <img className={styles.crewMemImg} src={teamMember.imgUrl} alt="member" />
            </div>
            <h2 className={styles.crewMemberName}>
                {teamMember.name}
            </h2>
            <p className={styles.crewMemberPosition}>{teamMember.role}</p>
        </li>
    )
}