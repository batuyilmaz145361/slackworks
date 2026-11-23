const products = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "In Stock",
    rating: "Points 1.5/5",
    badges: [
      { label: "sport", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "Out Stock",
    rating: "3.4/5",
    badges: [
      { label: "Casual", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "Out Stock",
    rating: "0.5/5",
    badges: [
      { label: "sport", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
  {
    id: 4,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "In Stock",
    rating: "1/5",
    badges: [
      { label: "Casual", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
  {
    id: 5,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "In Stock",
    rating: "2.5/5",
    badges: [
      { label: "Casual", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
  {
    id: 6,
    title: "Lorem, ipsum dolor",
    imageSrc: "https://source.unsplash.com/random/200x300",
    imageAlt: "image",
    stockStatus: "Out Stock",
    rating: "4.9/5",
    badges: [
      { label: "sport", className: "badge-1" },
      { label: "lifestyle", className: "badge-2" },
    ],
    buttonText: "Add To Cart",
  },
];

const blockItems = [
  { label: "Random 1", className: "badge-1" },
  { label: "Random 2", className: "badge-2" },
  { label: "Random 3", className: "badge-3" },
  { label: "Random 4", className: "badge-4" },
];

function BadgeItem({ label, className }) {
  return <span className={className}>{label}</span>;
}

function BadgeList({ badges }) {
  return (
    <div className="badges">
      {badges.map((badge, index) => (
        <BadgeItem key={index} label={badge.label} className={badge.className} />
      ))}
    </div>
  );
}

function ProductDescription({ stockStatus, rating }) {
  return (
    <div className="description">
      <span>{stockStatus}</span>
      <span>{rating}</span>
    </div>
  );
}

function AddToCartButton({ text }) {
  return <button type="button">{text}</button>;
}

function ProductCard({ product }) {
  return (
    <div className="shopping-item">
      <h3>{product.title}</h3>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <ProductDescription
        stockStatus={product.stockStatus}
        rating={product.rating}
      />
      <BadgeList badges={product.badges} />
      <AddToCartButton text={product.buttonText} />
    </div>
  );
}

function ProductGrid({ items }) {
  return (
    <main className="container">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </main>
  );
}

function BlockList({ items }) {
  return (
    <div className="block-listing">
      {items.map((item, index) => (
        <span key={index} className={item.className}>
          {item.label}
        </span>
      ))}
    </div>
  );
}

function Banner() {
  return <div className="banner"></div>;
}

function App() {
  return (
    <>
      <ProductGrid items={products} />
      <section className="container">
        <BlockList items={blockItems} />
        <Banner />
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));