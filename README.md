# LMS Frontend

# Setup instruction
1. Clone the project
````````
  git clone https://github.com/ansarialiakbar/lms-frontend.git
`````````
2. Move into the directory
```````
  cd lms-frontend
````````
3. install dependencies
```````
   npm install
````````
4. run the server
`````````
   npm run dev
```````

### Setup instruction for Tailwind CSS

[Tailwind official instruction docs](https://tailwindcss.com/docs/installation)

1. Install Tailwindcss
```````
  npm install -D tailwindcss
`````````

2. Create Tailwind config file
```````
  npx tailwindcss init
```````

3. Add file extensions to tailwind config file in the contents property
`````````
 " ./src/**/*.{html,js, jsx, ts, tsx}", "./index.html",
``````````

4. Add the tailwind directive at the top of `index.css` file

````````````
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

````````````
5. Add the following detail in the plugin property of the tailwindconfig
`````
  [require("daisyui"), require("@tailwindcss/line-clamp")],
`````


### Adding plugins and dependencies

````````
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
````````````

## configure auto import sort eslint

1. Install simple import sort
````
   npm i eslint-plugin-simple-import-sort
````
2. Add rule in `.eslin.cjs`
````
'simple-import-sort/imports': 'error',
````
3. Add simple-import-sort-piugin in `.eslin.cjs`
````
plugins: {
      ......,
      'simple-import-sort': simpleImportSort,
    },
````

4. To enable auto import sort in file save in vscode
    - open `setting.json`
    - add the following config
````
  "editior.codeActionsOnSave:{
    "source.fixAll.eslint: true
  }
````