const MenuItem = ({ label, onClick }) => {
    return (
        <div
            className="col-3 fs-5 d-flex justify-content-center fw-semibold"
            style={{ borderBottom: "2px solid black", cursor: "pointer" }}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default MenuItem;