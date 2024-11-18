const FileUpload = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="formFileLg"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Large file input example
      </label>
      <input
        className="focus:shadow-te-form-active relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-form-active focus:text-neutral-700 focus:outline-none"
        id="formFileLg"
        type="file"
      />
    </div>
  );
};

export default FileUpload;
