import style from './Dados.module.css';

function Dados() {
    return (
        <div className={style.data} >
            <img className={style.profilepic} src="profile-pic.jpg" />
            <div className={style.texts}>
                <h1 className={style.name}>Hugo de Freitas</h1>
                <h2 className={style.title}>Jr. Fullstack Developer</h2>
            </div>
        </div>
    )
}

export default Dados;