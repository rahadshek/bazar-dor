import { IProducts } from '@/types/types';
import BazarUp from './BazarUp';
import Link from 'next/link';


const  TodayBazarPage = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { cache: "force-cache" },
      );
    
      const products: IProducts[] = await res.json();
    const bazarUpfilter = products.filter(up=> up.change.dir === 'up')
    return (
        <div>
            {/* bazar up */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4" >
                {
bazarUpfilter.slice(0,6).map( up=> <Link href={'/'} ><BazarUp key={up.id} up={up} /></Link>  )
                }
            </div>
        </div>
    );
};

export default TodayBazarPage;