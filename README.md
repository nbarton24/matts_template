# Material react express template

### Development mode

In the development mode, 2 servers will be running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which deals with hot and live reloading. The server side Express code will be served by [nodemon](https://nodemon.io/) which helps handles restarting the server whenever server side code changes.

### Production mode

In production, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Express application.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code will be in client directory and all backend Express code will be in the server directory.