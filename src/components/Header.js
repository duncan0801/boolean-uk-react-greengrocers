import StoreItem from "./StoreItem"

function Header({shopItems
    , setShopItems}) {
    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
        {/* 1. GO THOUGH STORE ITEMS AND RENDER THEM  */
            shopItems.map((shopItem) => {
            return <StoreItem shopItem={shopItem}/>
        })
        }
            </ul>
        </header>
    )
}
export default Header