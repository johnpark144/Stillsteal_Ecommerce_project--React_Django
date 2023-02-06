import styles from '../routes/Category.module.css';

export default function PostNumberPagination({ limit, setLimit, page, setPage, numPages, bottom,
    setSortBy, lessThenPrice, setLessThenPrice, sortBy }) {
        
    return <>
        {/* Number of posts to display per page  */}
        <div className={styles.postNumberPagination}>
            {bottom ? "" : (<>
                <label className={styles.postNumber}>
                    Number of posts to display per page :&nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => { setLimit(Number(value)); setPage(1); }}
                    >  {/* Depend on values, Set the limit  */}
                        <option value="6" >6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
                <label className={styles.sortBy}>
                    Sort By
                    <select
                        name="sort"
                        id="sort"
                        value={sortBy}
                        onChange={({ target: { value } }) => { setSortBy(value); setPage(1); }}
                    >
                        <option value="SortBy">Sort By</option>
                        <option value="price">Price (lowest)</option>
                        <option value="-price">Price (highest)</option>
                        <option value="name">Name (a-z)</option>
                        <option value="-name">Name (z-a)</option>
                        <option value="rate">Rate (highest)</option>
                    </select>
                </label>
                <label className={styles.price}>
                    <h3>Price</h3>
                    <input onChange={({ target: { value } }) => { setLessThenPrice(value) }} value={lessThenPrice}
                    type="range" name="price" min="0" max="2000" />
                    <h3>${lessThenPrice}</h3>
                </label>
            </>)}
            {/* Pagination */}
            <div>
                <nav aria-label="Page navigation example" className='flex justify-center mb-4'>
                    <ul className="inline-flex justify-center px-4 w-full">
                        <button disabled={page === 1} onClick={() => { setPage(page - 1); window.scrollTo(0, 0); }}
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 
                         rounded-l-lg leading-tight py-2 px-3">
                            &lt;
                        </button>
                        <li>
                            {Array(numPages)
                                .fill()
                                .map((_, idx) => (    // extract only index
                                    <button
                                        className={page === idx + 1 ? (  // Current page = Blue, Others = Gray
                                            "bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3"
                                        ) : (
                                            "bg-white border border-gray-300 text-gray-200 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3"
                                        )}
                                        key={idx + 1}
                                        onClick={() => { setPage(idx + 1); window.scrollTo(0, 0); }}  // When clicked, Go to that page
                                        aria-current={page === idx + 1 ? "page" : null}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                        </li>
                        <button disabled={page === numPages} onClick={() => { setPage(page + 1); window.scrollTo(0, 0); }}
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 
                        rounded-r-lg leading-tight py-2 px-3">
                            &gt;
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    </>
}
