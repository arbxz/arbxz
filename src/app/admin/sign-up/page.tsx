import Card from "@/components/shared/Card";
import Button from "@/components/ui-elements/Button";
import Checkbox from "@/components/ui-elements/Checkbox";
import Input from "@/components/ui-elements/Input";

function SignUp() {
  return (
    <div className="flex w-full justify-center">
      <Card background="glass" styles="mx-auto">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 p-4 md:p-8">
          <h1 className="gradient-text text-4xl font-bold">Sign Up.</h1>
          <span>Join the team</span>
          <div className="flex w-full justify-start gap-4">
            <Input
              id="NameID"
              name="Name"
              label="Name"
              type="Text"
              errorMessage="Can't be empty."
            />
            <Input
              id="SurnameID"
              name="Surname"
              label="Surname"
              type="Text"
              errorMessage="Can't be empty."
            />
          </div>

          <Input
            id="TelephoneID"
            name="Telephone"
            label="Telephone"
            type="tel"
            errorMessage="Please enter a valid phone number."
          />

          <Input
            id="EmailID"
            name="User email"
            label="Email field"
            type="Email"
            errorMessage="Please enter a valid email."
          />
          <Input
            id="PasswordID"
            name="Password"
            label="Password field"
            type="Password"
            errorMessage="Password can't be less than 4 characters."
          />
          <Input
            id="Password2ID"
            name="ConfirmPassword"
            label="Confirm Password"
            type="Password"
            errorMessage="Password can't be different password above."
          />

          <Checkbox
            id="newsletter"
            label="Subscribe to our newsletter"
            ariaLabel="newsletter checkbox"
            value={"subscribed"}
          />

          <Button intent="secondary" text="sign up." />
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
