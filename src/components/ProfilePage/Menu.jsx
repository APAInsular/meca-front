import MenuItem from "./MenuItem";

const Menu = ({ items, setActiveTab }) => {
    return (
        <div className="mt-3 row">
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    label={item.label}
                    onClick={() => setActiveTab(item.key)}
                />
            ))}
        </div>
    );
};

export default Menu;