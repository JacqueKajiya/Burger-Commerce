
export const InputSearch = ({ setFilteredProducts, products }) => {

    return (
        <div>
            <input type="text" placeholder="Digitar pesquisa"/>
            <button type="button" onClick={() => setFilteredProducts([])}>Pesquisar</button>
        </div>
    )
}