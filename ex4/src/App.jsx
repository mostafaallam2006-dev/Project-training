import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Products from "./components/Products";
import "./App.css";

const App = () => {
  const products = [
    {
      id: 1,
      title: " لوجيتيك مجموعة كيبورد وماوس لاسلكية بالحجم الكامل MK270 - اسود",
      price: 1533,
      insteadOf: 1999,
      img: "https://m.media-amazon.com/images/I/61+aByx2jML._AC._SR360,460.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      title:
        "قرص صلب خارجي محمول بسعة 2 تيرابايت من سيجيت – USB 3.0 لأجهزة الكمبيوتر المكتبي، ماك ، البلاي ستيشن، و اكس بوكس – خدمة إستعادة البيانات لمدة سنة كاملة (STGX2000400) | Everyday HDD storage. Plug-and-play backup. Windows &amp; macOS. Adobe CC trial included. 1-Year Warranty",
      price: 8029,
      insteadOf: 8999,
      img: "https://m.media-amazon.com/images/I/41OUh0ZU1NL._AC._SR360,460.jpg",
      rating: 4.0,
    },
    {
      id: 3,
      title:
        "وولف بوكس منفضة هواء مضغوطة 50 من ميجا فلو، 110000 دورة في الدقيقة، 3 تروس قابلة للتعديل | كهربائي، منفاخ صغير، شحن سريع، الكمبيوتر، الكيبورد، المنزل، في الهواء الطلق، سيارة، وزن 0.20 كجم، خفيف الوزن， 4 فوهات",
      price: 1651,
      insteadOf: 1999,
      img: "https://m.media-amazon.com/images/I/713BEhBxXWL._AC._SR360,460.jpg",
      rating: 4.2,
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500),
      );
      setProductList(products);
      setIsLoading(false);
    };
    getData();
  }, [products]);

  return (
    <>
      <h1>Hello React</h1>
      {/* <Products products={productList} /> */}
      {isLoading && <p>Loading...</p>}
      {!isLoading && productList && <Products products={productList} />}
    </>
  );
};

export default App;
