function StoreItem(props) {
    return (
        <li key={props.shopItem.id.toString()}>
            <div className="store--item-icon">
                <img src={`../../assets/icons/${props.shopItem.id}.svg`} alt={props.shopItem.id} />
            </div>
            <button>Add to cart</button>
        </li>
    )
}
export default StoreItem
