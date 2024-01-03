import Image from "next/image";

import Alert from "@/components/ui-elements/Alert";
import Box from "@/components/ui-elements/Box";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

const PageContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert />
      <div className="flex flex-col md:flex-row gap-4">
        <Box>
          <h1 className="text-4xl font-bold">Welcome !</h1>
          <br />
          <h2 className="text-2xl font-bold">
            This ia a work in progress I will be constantly adding elements to
            this poject every week or so!
          </h2>
          <br />
          <h3 className="inline-block bg-background-secondary p-2 shadow-sm rounded">
            Be sure to check it out.
          </h3>
        </Box>

        <Box>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4 p-2 rounded shadow-sm cursor-pointer duration-300 transition-all hover:bg-background-secondary hover:translate-x-1">
              <div className="relative">
                <Image
                  className="rounded-full shadow"
                  src="/images/arbaaz-picture.jpg"
                  width={50}
                  height={50}
                  alt="user image"
                />
                <span className="absolute top-0 -left-2 h-6 w-6 flex items-center justify-center text-center text-white bg-active text-xs rounded-full">
                  25
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Arbaaz Mowlabucus</span>
                <span className="text-sm">
                  Hey can you check out this graph ?
                </span>
              </div>

              <span className="text-sm font-light self-end">19h:30</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-2 rounded shadow-sm cursor-pointer duration-300 transition-all hover:bg-background-secondary hover:translate-x-1">
              <div className="relative">
                <Image
                  className="rounded-full shadow"
                  src="/images/arbaaz-picture.jpg"
                  width={50}
                  height={50}
                  alt="user image"
                />
                <span className="absolute top-0 -left-2 h-6 w-6 flex items-center justify-center text-center text-white bg-active text-xs rounded-full">
                  25
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Arbaaz Mowlabucus</span>
                <span className="text-sm">
                  Hey can you check out this graph ?
                </span>
              </div>

              <span className="text-sm font-light self-end">19h:30</span>
            </div>
            <div className="flex items-center justify-start gap-4 p-2 rounded shadow-sm cursor-pointer duration-300 transition-all hover:bg-background-secondary hover:translate-x-1">
              <div className="relative">
                <Image
                  className="rounded-full shadow"
                  src="/images/arbaaz-picture.jpg"
                  width={50}
                  height={50}
                  alt="user image"
                />
                <span className="absolute top-0 -left-2 h-6 w-6 flex items-center justify-center text-center text-white bg-active text-xs rounded-full">
                  25
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Arbaaz Mowlabucus</span>
                <span className="text-sm">
                  Hey can you check out this graph ?
                </span>
              </div>

              <span className="text-sm font-light self-end">19h:30</span>
            </div>
          </div>
        </Box>
      </div>

      <Box>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-2">
            <Button intent="primary" text="Create" /> <br /> <br />
            <Button intent="secondary" text="Update" /> <br /> <br />
            <Button intent="danger" text="Delete" /> <br /> <br />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Input
              id="textID"
              name="Textfield"
              label="Text field"
              type="text"
            />
            <Input
              id="emailID"
              name="Email field"
              label="Email field"
              value="badEmail"
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
              value="1234"
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
    </div>
  );
};

export default PageContent;
