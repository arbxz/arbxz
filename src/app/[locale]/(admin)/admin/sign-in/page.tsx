import Link from "next/link";

import Card from "@/components/shared/Card";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

function SignIn() {
  return (
    <div className="flex justify-center w-full">
      <Card background="glass" styles="mx-auto">
        <div className="flex flex-col flex-wrap gap-4 justify-center items-center p-4 md:p-8 w-full">
          <h1 className="text-4xl font-bold gradient-text">Sign in.</h1>
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
            className="hover:scale-[1.05] duration-300 transition-transform"
            prefetch={false}>
            Forgot your password ?
          </Link>
          <Button intent="secondary" text="sign in." />
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
