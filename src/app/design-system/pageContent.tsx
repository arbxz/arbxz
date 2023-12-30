import Box from "@/components/ui-elements/Box";
import Button from "@/components/ui-elements/Button";

const PageContent = () => {
  return (
    <div className="w-full overflow-y-auto">
      <Box>
        <Button intent="primary" text="Create" /> <br /> <br />
        <Button intent="secondary" text="Update" /> <br /> <br />
        <Button intent="tertiary" text="Delete" /> <br /> <br />
        <Button intent="danger" text="Delete" /> <br /> <br />
      </Box>
    </div>
  );
};

export default PageContent;
