

function CartItem(props) {

    let itemName = props.cartItem.id.slice(4)


    return (
        <li key={props.cartItem.id.toString()}>

            <img
                className="cart--item-icon"
                src={`../../assets/icons/${props.cartItem.id}.svg`}
                alt="beetroot"
            />
            <p>{itemName}</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{props.cartItem.quantity}</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>

    )
}
export default CartItem