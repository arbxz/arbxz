import Link from "next/link";

import Card from "@/components/shared/Card";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

function SignIn() {
  return (
    <div className="flex justify-center w-full">
      <Card glass styles="mx-auto">
        <div className="flex flex-col flex-wrap gap-4 justify-center items-center p-4 md:p-8 w-full">
          <h1 className="text-4xl font-bold gradient-text">Add product</h1>
          <span>
            names : textbox
            <br /> price : number
            <br /> currency : dropdown <br />
            veg [] : radio
            <br /> halal[]
            <br />
            new[]
            <br /> in stock[]
            <br /> alcoholic : []
            <br /> description : textarea
            <br /> img : upload
            <br />
            allergens/ingredients : tag based textarea | searchable dropdown
            <br /> category : dropdown
            <br />
          </span>

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
            className="hover:scale-[1.05] duration-300 transition-transform">
            Forgot your password ?
          </Link>
          <Button intent="primary" text="sign in." />
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
