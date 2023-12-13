'use client'
import { useEffect, useState } from 'react';
import CardItem from '@/components/Card/CardItem';
import Footer from '@/components/Common/Footer';
import Sponsor from '@/components/Common/Sponsor';
import FilterBar from '@/components/navegation/FilterBar';
import Indications from '@/components/navegation/Indications';
import NavBar from '@/components/navegation/NavBar';
import NavegationBtn from '@/components/navegation/NavegationBtn';
import { shopItems } from '@/utils/interface';
import Link from 'next/link';

function ShopPage() {
  const [data, setData] = useState<shopItems[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/shop');
        const fetchedData: shopItems[] = await res.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

 
    if (data.length === 0) {
      fetchData();
    }
  }, [data]); 

  return (
    <main className="relative">
      <NavBar />
      <Indications  />
      <div className="flex flex-col py-16 gap-y-12">
        <FilterBar />
        <div className="w-full px-3 sm:px-6 lg:px-12 3xl:px-24 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16 place-items-center max-w-fit">
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.map((item) => (
                <Link href={`/shop/${item._id}`} key={item._id}>
                  <CardItem image={item.colors[0].urlList[0]} name={item.name} price="250" />
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center px-6 lg:px-12 2xl:px-24">
          <NavegationBtn />
        </div>
      </div>
      <Sponsor />
      <Footer />
    </main>
  );
}

export default ShopPage;
