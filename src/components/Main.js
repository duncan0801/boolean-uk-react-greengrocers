import CartItem from "./CartItem"

function Main(props) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {
                    props.cartItems.map((cartItem => 
                    {
                    return <CartItem cartItem={cartItem} />
                    }))}
                </ul>
            </div>
            <div className="total-section">
                <div>
                <h3>Total</h3>
                </div>
                <div>
                <span className="total-number">£0.00</span>
                </div>
            </div>
        </main>
    )
}
export default Main