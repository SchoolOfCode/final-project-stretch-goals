import css from "./NavBar.module.css"

export default function NavBar(){
    return(<div className={css.navBarContainer}>
<div className={css.title}>
    <h1 >Ducio</h1>
</div>
<div className={css.loginButton}>
    <button>LOGIN </button>
</div>
<div className={css.searchField}>
    <input />
</div>
    </div>)
}