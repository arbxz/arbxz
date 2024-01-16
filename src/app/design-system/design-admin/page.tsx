import Link from "next/link";

import Card from "@/components/shared/Card";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

function SignIn() {
  return (
    <div className="flex justify-center w-full">
      <Card background="glass" styles="mx-auto">
        <div className="flex flex-col flex-wrap gap-4 justify-center items-center p-4 md:p-8 w-full">
          <h1 className="text-4xl font-bold gradient-text">Add product</h1>
          <span>
            admin name : textbox
            <br /> logo : upload
            <br /> font : string
            <br /> theme : color picker
            <br /> description : text input
            <br /> tagline : text input
            <br /> contact details : address/phone/email
            <br /> Language : dropdown
            <br />
            opening hours : time input
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
            className="hover:scale-[1.05] duration-300 transition-transform"
            prefetch={false}>
            Forgot your password ?
          </Link>
          <Button intent="primary" text="sign in." />
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
