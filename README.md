# Description

## Dev run

1. Clone the repository
2. Create a copy of the `.env.template` file and rename it to `.env` and fill the variables
3. Install dependencies `npm install`
4. Up the database `docker-compose up -d`
5. Run the prisma migrations `npx prisma migrate dev`
6. Execute the seed `npm run seed`
7. Run the project ` npm run dev`

## Production run
