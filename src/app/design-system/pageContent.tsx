import Box from "@/components/ui-elements/Box";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

const PageContent = () => {
  return (
    <Box>
      <div className="flex flex-wrap gap-8">
        <div className="flex gap-4">
          <Button intent="primary" text="Create" /> <br /> <br />
          <Button intent="secondary" text="Update" /> <br /> <br />
          <Button intent="tertiary" text="Delete" /> <br /> <br />
          <Button intent="danger" text="Delete" /> <br /> <br />
        </div>
        <div className="flex flex-wrap gap-4">
          <Input id="textID" name="Textfield" label="Text field" type="text" />
          <Input
            id="emailID"
            name="Email field"
            label="Email field"
            type="email"
          />
          <Input
            id="searchID"
            name="Search field"
            label="Search field"
            type="search"
          />
          <Input
            id="passwordID"
            placeholder="Input your password"
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
          <Input
            placeholder="www.your_url.com"
            id="urlID"
            name="URL field"
            label="URL field"
            type="url"
          />
        </div>
      </div>
    </Box>
  );
};

export default PageContent;
