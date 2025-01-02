import { StyledLink } from "baseui/link";

export default () => {
  return (
    <footer className="flex justify-center items-center p-20 bg-gray-800 text-white">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 justify-center">
          <StyledLink  href="https://github.com/your-repo">
            GitHub
          </StyledLink>
        </div>
        {/*空白*/}
        <div className="h-10"></div>
        <h2 className="text-lg font-bold text-center text-gray-800 dark:text-gray-100">Template App</h2>
      </div>
    </footer>
  );
};
