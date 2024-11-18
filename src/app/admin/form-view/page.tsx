import { OctagonAlert, TriangleAlert, Zap } from "lucide-react";

import Alert from "@/components/ui-elements/Alert";
import Box from "@/components/ui-elements/Box";
import Button from "@/components/ui-elements/Button";
import Checkbox from "@/components/ui-elements/Checkbox";
import FileUpload from "@/components/ui-elements/FileUpload";
import Input from "@/components/ui-elements/Input";
import Radio from "@/components/ui-elements/Radio";
import TextArea from "@/components/ui-elements/TextArea";

function FormView() {
  return (
    <Box>
      <div className="flex flex-col gap-8">
        <span>tag based textarea | searchable dropdown</span>

        <h2 className="text-3xl">Alerts</h2>

        <div className="flex flex-col gap-2">
          <Alert intent="info" text="This is an info alert" Icon={<Zap />} />
          <Alert
            intent="danger"
            text="This is an error alert"
            Icon={<TriangleAlert />}
          />
          <Alert
            intent="warning"
            text="This is an warning alert"
            Icon={<OctagonAlert />}
          />
        </div>

        <h2 className="text-3xl">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button intent="primary" text="Create" />
          <Button intent="secondary" text="Update" />
          <Button intent="danger" text="Delete" />
          <Button intent="secondary" text="Icon Button" Icon={<Zap />} />
        </div>
        <h2 className="text-3xl">Inputs</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Input id="textID" name="Textfield" label="Text field" type="text" />
          <Input
            id="emailID"
            name="Email field"
            label="Email field"
            type="email"
            errorMessage="Enter a valid email address."
          />
          <Input
            id="searchID"
            name="Search field"
            label="Search field"
            type="search"
          />
          <Input
            id="passwordID"
            name="Password field"
            label="Password field"
            type="password"
          />
          <Input
            id="numberID"
            name="Number field"
            label="Number field"
            type="number"
          />
          <Input id="urlID" name="URL field" label="URL field" type="url" />
        </div>
        <div>
          <TextArea id="urlID" name="URL field" label="URL field" />
        </div>
        <div className="flex gap-10 md:gap-20">
          <div>
            <h2 className="mb-4 text-3xl">Radio</h2>
            <Radio
              id="basic-plan"
              label="Basic plan"
              subLabel="Select our basic plan free for a limited time only"
              value="basic"
              ariaLabel="basic-plan-radio"
            />
            <Radio
              id="premium-plan"
              label="Premium plan"
              subLabel="Select our premium plan for $9.99"
              value="premium"
              ariaLabel="premium-plan-radio"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl">Checkbox</h2>
            <Checkbox
              id="Write"
              label="Write access"
              value="write"
              ariaLabel="write-access-radio"
            />
            <Checkbox
              id="Read"
              label="Read only access"
              value="read"
              ariaLabel="read-access-radio"
            />
            <Checkbox
              id="Admin"
              label="Admin access"
              value="admin"
              ariaLabel="admin-access-radio"
            />
          </div>
        </div>
        <div>
          <FileUpload />
        </div>
      </div>
    </Box>
  );
}

export default FormView;
