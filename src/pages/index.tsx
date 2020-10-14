import { useState, useEffect } from 'react';

import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then((response) => {
      response.json().then(data => {
        setRecommendedProducts(data);
      })
    })
  }, [])

  async function handleSum() {
    const math = (await import('../lib/math')).default;

    alert(math.sum(3, 5));
  }

  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id} >
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>

      <button type="button" onClick={handleSum}>Sum!</button>
    </div>
  )
}
