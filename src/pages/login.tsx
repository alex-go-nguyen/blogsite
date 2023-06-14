import Logo from '@/assets/logo';
import Input from '@/components/Input/Input';
import Button from '@/components/button/Button';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle, FaUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { LoginPayload } from '@/services/auth/auth.dto';
import { useEffect } from 'react';
import { SEO } from '@/services/homepage/homepage.dto';
import Seo from '@/components/seo/seo';
import { useAuth } from '@/components/context/auth';

const schema = object({
  identifier: string().required('Required'),
  password: string().required('Required'),
});

export default function Login() {
  const router = useRouter();

  const { user, loading, error, login } = useAuth();

  const { register, handleSubmit } = useForm<LoginPayload>({ resolver: yupResolver(schema) });

  const onSubmitHandler = (loginData: LoginPayload) => login(loginData);

  const seo: SEO = {
    metaTitle: 'Login',
  };

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, router, loading]);

  return (
    <>
      <Seo seo={seo} />
      <div className="h-screen flex items-center justify-center text-center">
        <div className="w-2/3 lg:w-1/2 shadow-2xl dark:shadow-blue-500/50 p-12 bg-white dark:bg-dark-mode rounded-lg overflow-hidden ">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex justify-center">
              <Logo />
            </div>
            <p className="font-bold text-2xl my-4">Login into Meta blog</p>
            {error && (
              <div className="bg-red-50 dark:bg-dark-mode text-red-500 py-2 rounded-md">
                Wrong username/email or password !
              </div>
            )}
            <Input {...register('identifier')} placeholder="Email" startDecorator={<FaUser />} className="my-2" />
            <Input
              {...register('password')}
              type="password"
              placeholder="Password"
              startDecorator={<FaLock />}
              className="my-2"
            />
            <Button variant="solid" loading={loading} loadingPosition="start" className="w-full my-4">
              Login
            </Button>
            <div className="flex justify-between text-blue-400 ">
              <Link href="/forgot-password" className="hover:text-red-500">
                Forgot password
              </Link>
              <Link href="/register" className="hover:text-red-500">
                Register
              </Link>
            </div>
          </form>
          <div>
            <h1 className="font-semibold text-xl relative text-blue-500 py-4">Login with others ways</h1>
            <div className="grid grid-cols-3 gap-4 text-lg">
              <Button variant="outlined" className="col-span-1 flex items-center justify-center">
                <span className="mx-2 text-blue-600">
                  <FaFacebook />
                </span>
                <span className="mr-2"> Facebook</span>
              </Button>
              <Button variant="outlined" className="col-span-1 flex items-center justify-center">
                <span className="mx-2 text-red-500">
                  <FaGoogle />
                </span>
                <span className="mr-2"> Google</span>
              </Button>
              <Button variant="outlined" className="col-span-1 flex items-center justify-center">
                <span className="mx-2">
                  <FaGithub />
                </span>
                <span className="mr-2"> Github</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.Layout = 'Empty';
