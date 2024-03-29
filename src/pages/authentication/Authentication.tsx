import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import Logo from '@/components/logo/Logo';

export interface IAuthenticationProps {}

export default function Authentication() {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gocn-grey-primary px-4">
      <div className="relative flex h-[500px] w-[400px] flex-col divide-y-[1px] divide-grey-60 rounded-lg bg-gocn-grey-secondary px-8 py-4 shadow-md shadow-transparent-black">
        <div className="flex h-[80px] justify-center">
          <Logo />
        </div>
        <div className="flex h-[300px] flex-col gap-4 py-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-white">E-mail</p>
            <input
              className="w-full rounded-md px-4 py-3 focus:outline-none"
              type="email"
              defaultValue={'user@gocn.com.br'}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-white">Password</p>
            <input className="w-full rounded-md px-4 py-3 focus:outline-none" type="password" />
          </div>
        </div>
        <div className="flex h-[99px] items-center justify-center pt-4">
          <button
            className="w-40 rounded-md border-[1px] px-4 py-3 font-bold text-white transition-colors duration-200 hover:border-gocn-green-secondary hover:text-gocn-green-secondary"
            onClick={signIn}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
