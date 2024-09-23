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
 "./src/**/*.{html,js, jsx, ts, tsx}"
``````````

4. Add the tailwind directive at the top of `index.css` file

````````````
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

````````````
