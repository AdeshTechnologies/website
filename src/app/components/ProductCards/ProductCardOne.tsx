import Image from "next/image";
import Link from "next/link";

import styles from "./ProductCardOne.module.css";

type ProductCardOneProps = {
  imageUrl: string;
  name: string;
};

const ProductCardOne = ({ imageUrl, name }: ProductCardOneProps) => {
  return (
    <Link
      href="/"
      aria-label="Go to product details page"
      className={styles.cardOneWrapper}
    >
      <div className={styles.cardOneContent}>
        {/* Product Image */}
        <Image src={imageUrl} alt="Product image" width={300} height={300} />
        <div className={styles.cardOneContentText}>
          <span>Price</span>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardOne;
