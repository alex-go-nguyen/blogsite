import Logo from '@/assets/logo';
<<<<<<< HEAD
=======
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export default function Account() {
  return (
    <div className="flex justify-center items-center">
<<<<<<< HEAD
      <span className="my-40 animate-pulse ">
=======
      <span className="my-40 animate-spin ">
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        <Logo />
      </span>
    </div>
  );
}

Account.Layout = 'UserManagement';
