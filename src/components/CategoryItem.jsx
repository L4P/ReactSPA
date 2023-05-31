import { Link } from "react-router-dom"; 

function CategoryItem(props) {
    const {strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 120)}...</p>
            </div>
            <button className="card-action">
                <Link to={`/category/${strCategory}`} className="btn">
                    Go To {strCategory}
                </Link>
            </button>
        </div>
    );
}

export { CategoryItem };