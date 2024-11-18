import Link from 'next/link';

import Card from '@/components/shared/Card';
import Button from '@/components/ui-elements/Button';
import Input from '@/components/ui-elements/Input';

function SignIn() {
  return (
    <div className="flex w-full justify-center">
      <Card background="glass" styles="mx-auto">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 p-4 md:p-8">
          <h1 className="gradient-text text-4xl font-bold">Sign in.</h1>
          <Input
            id="EmailID"
            name="User email"
            label="Email"
            type="Email"
            errorMessage="Please enter a valid email."
          />
          <Input
            id="PasswordID"
            name="Password"
            label="Password"
            type="Password"
            errorMessage="Password can't be less than 4 characters."
          />
          <Link
            href=""
            className="transition-transform duration-300 hover:scale-[1.05]"
            prefetch={false}
          >
            Forgot your password ?
          </Link>
          <Button intent="secondary" text="sign in." />
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
