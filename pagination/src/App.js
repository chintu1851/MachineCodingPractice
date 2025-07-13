import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const apicall = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  const handleclick=(selectedpage)=>{
    if(selectedpage>=1 && selectedpage<=(products.length/10)&& selectedpage!==page)
    setPage(selectedpage)
  }
  useEffect(() => {
    apicall();
  }, []);

  return (
    <div className="App">
      {products.length > 0 && (
        <>
          <div className="products">
            {products.slice((page - 1) * 10, page * 10).map((prod) => (
              <div className="product_details" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            ))}
          </div>

          <div className="pagination">
            <span onClick={()=>handleclick(page-1)} className={page>1?"":"paginationdisable"}>◀️</span>
            <span>
              {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
                <span className={page==i+1?"paginationselected":""} key={i} onClick={()=>handleclick(i+1)}>{i + 1}</span>
              ))}
            </span>
            <span onClick={()=>handleclick(page+1)} className={page<products.length/10?"":"paginationdisable"}>▶️</span>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
