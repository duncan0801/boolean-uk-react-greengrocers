

function CartItem(props) {
    return (
        <li key={props.cartItem.id.toString()}>

            <img
                className="cart--item-icon"
                src={`../../assets/icons/${props.cartItem.id}.svg`}
                alt="beetroot"
            />
            <p>{props.cartItem.id}</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">1</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>

    )
}
export default CartItem