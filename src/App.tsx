import Command from "./components/Command";

const App = () => {
  return (
    <div className="h-full justify-start items-center flex flex-col">
      <h1 className="text-2xl m-20">Welcome to Joshua's Commands</h1>
      <div className="flex flex-col items-start bg-slate-400 rounded-xl p-10 text-white border-black border-2">
        <Command command="cd/Documents" title="cd Into Documents" />
        <Command command="npx create-react-app" title="Create a React App" />
        <Command
          command="npx create-react-app --template typescript"
          title="Create a React App with Typescript"
        />

        <Command
          command="npm install -D tailwindcss postcss autoprefixer
        "
          title="Tailwind Install"
        />
        <Command
          command="npx tailwindcss init -p"
          title="Generate Tailwind Config"
        />
        <Command
          command='"./src/**/*.{js,jsx,ts,tsx}",'
          title="Tailwind Config Setup"
        />
        <Command
          command="@tailwind base;
@tailwind components;
@tailwind utilities;"
          title="Import Tailwind Directives to index.css"
        />
      </div>
      <div className="p-10" />
    </div>
  );
};

export default App;
