import bodyParser from 'body-parser';


export default function setupMiddleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}
