
import ProductCard from "./components/ProductCard";


function App() {
  return (
    <div style={{display: "flex", gap: "5px", flexWrap: "wrap"}}>
      <ProductCard 
        name="Mercedes-Benz"
        image="https://vuanem.com/blog/wp-content/uploads/2022/12/tim-hieu-hang-xe-mercedes.jpg"
        description="Thương hiệu xe sang trọng từ Đức với thiết kế đẳng cấp và công nghệ tiên tiến."
      />
      <ProductCard 
        name="Rolls-Royce"
        image="https://pixelz.cc/wp-content/uploads/2017/12/rolls-royce-logo-uhd-4k-wallpaper.jpg"
        description="Thương hiệu xe sang trọng động cơ mạnh mẽ,vận hành êm ái."
      />
      <ProductCard 
        name="BMW"
        image="https://wallpapers.com/images/hd/bmw-logo-3840-x-2160-wallpaper-2lstyl0yiccqk514.jpg"
        description="Hãng xe với thiết kế thể thao, sang trọng và đẳng cấp."
      />
      <ProductCard 
        name="Lexus"
        image="https://tse1.mm.bing.net/th?id=OIP.WgmnJFU5IDzjKQfISV5VIQHaFj&pid=Api&P=0&h=180"
        description="Hãng xe nổi bật với chất lượng bền bỉ, độ tin cậy cao."
      />
      <ProductCard 
        name="Ford"
        image="https://baohaauto.vn/wp-content/uploads/cac-hang-xe-hoi-cua-my-1.jpg"
        description="Hãng xe Mỹ nổi bật với các dòng SUV và bán tải mạnh mẽ."
      />
    </div>
  );
}

export default App;
