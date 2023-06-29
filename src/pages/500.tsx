<<<<<<< HEAD
import Image from 'next/image';

export default function Custom500() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <Image src="/owl.png" width={200} height={200} alt="owl 404" className="mx-auto animate-bounce" />
        <p className="mx-auto text-6xl">500 - SHARK BITTEN THE SERVER</p>
      </div>
    </div>
  );
=======
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
}

Custom500.Layout = 'Empty';
