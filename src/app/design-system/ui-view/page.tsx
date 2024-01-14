import Box from "@/components/ui-elements/Box";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

function Dashboard() {
  return (
    <Box>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-2">
          <Button intent="primary" text="Create" /> <br /> <br />
          <Button intent="secondary" text="Update" /> <br /> <br />
          <Button intent="danger" text="Delete" /> <br /> <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      </div>
    </Box>
  );
}

export default Dashboard;
